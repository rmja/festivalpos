using Microsoft.Extensions.Options;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.Printing
{
    public class PrintQueue
    {
        private readonly PosOptions _options;
        private volatile IDatabase _database;
        private SemaphoreSlim _lock = new SemaphoreSlim(1);

        public PrintQueue(IOptions<PosOptions> options)
        {
            _options = options.Value;
        }

        public async Task<long> EnqueueAsync(int printerId, PrintJob job)
        {
            await EnsureConnected();

            var jobKey = $"printers:{printerId}:jobs:{Guid.NewGuid()}";

            var batch = _database.CreateBatch();

            _ = batch.HashSetAsync(jobKey, new[]
            {
                new HashEntry("name", job.Name),
                new HashEntry("data", job.Data)
            });

            var positionTask = batch.ListRightPushAsync($"printers:{printerId}:queue", jobKey);

            batch.Execute();

            return await positionTask;
        }

        public async Task<PrintJob> DequeueAsync(int printerId)
        {
            await EnsureConnected();

            var result = (RedisValue[])await _database.ScriptEvaluateAsync(@"
local queueKey = KEYS[1]
local jobKey = redis.call('LPOP', queueKey)
if jobKey then
    local hash = redis.call('HGETALL', jobKey)
    redis.call('DEL', jobKey)
    return hash
end
return {}",
                new RedisKey[]
                {
                    $"printers:{printerId}:queue"
                },
                Array.Empty<RedisValue>());

            if (result.Length == 0)
            {
                return null;
            }

            var dictionary = new Dictionary<string, RedisValue>(result.Length / 2);
            for (var i = 0; i < result.Length; i += 2)
            {
                var key = result[i];
                var value = result[i + 1];
                dictionary.Add(key, value);
            }

            return new PrintJob()
            {
                Name = dictionary["name"],
                Data = dictionary["data"]
            };
        }

        private async Task EnsureConnected()
        {
            if (_database != null)
            {
                return;
            }

            await _lock.WaitAsync();

            try
            {
                if (_database != null)
                {
                    return;
                }

                var connection = await ConnectionMultiplexer.ConnectAsync(_options.RedisConnectionString);
                _database = connection.GetDatabase();
            }
            finally
            {
                _lock.Release();
            }
        }
    }
}
