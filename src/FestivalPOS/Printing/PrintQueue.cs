using Microsoft.Extensions.Options;
using StackExchange.Redis;

namespace FestivalPOS.Printing
{
    public class PrintQueue(IOptions<PosOptions> options)
    {
        private readonly PosOptions _options = options.Value;
        private volatile IDatabase? _database;
        private SemaphoreSlim _lock = new SemaphoreSlim(1);

        public async Task<long> EnqueueAsync(PrintJob job)
        {
            var database = await GetDatabaseAsync();

            var jobKey = $"printers:{job.PrinterId}:jobs:{Guid.NewGuid()}";

            var batch = database.CreateBatch();

            _ = batch.HashSetAsync(
                jobKey,
                [new HashEntry("name", job.Name), new HashEntry("data", job.Data)]
            );

            var positionTask = batch.ListRightPushAsync($"printers:{job.PrinterId}:queue", jobKey);

            batch.Execute();

            return await positionTask;
        }

        public async Task<PrintJob?> DequeueAsync(int printerId)
        {
            var database = await GetDatabaseAsync();

            var result = (RedisValue[]?)
                await database.ScriptEvaluateAsync(
                    @"
local queueKey = KEYS[1]
local jobKey = redis.call('LPOP', queueKey)
if jobKey then
    local hash = redis.call('HGETALL', jobKey)
    redis.call('DEL', jobKey)
    return hash
end
return {}",
                    [$"printers:{printerId}:queue"],
                    Array.Empty<RedisValue>()
                );

            if (result is null || result.Length == 0)
            {
                return null;
            }

            var dictionary = new Dictionary<string, RedisValue>(result.Length / 2);
            for (var i = 0; i < result.Length; i += 2)
            {
                var key = result[i];
                var value = result[i + 1];
                dictionary.Add(key!, value);
            }

            return new PrintJob()
            {
                PrinterId = printerId,
                Name = dictionary["name"]!,
                Data = dictionary["data"]!
            };
        }

        private async Task<IDatabase> GetDatabaseAsync()
        {
            if (_database is not null)
            {
                return _database;
            }

            await _lock.WaitAsync();

            try
            {
                if (_database is not null)
                {
                    return _database;
                }

                var connection = await ConnectionMultiplexer.ConnectAsync(
                    _options.RedisConnectionString
                );
                return _database = connection.GetDatabase();
            }
            finally
            {
                _lock.Release();
            }
        }
    }
}
