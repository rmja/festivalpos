using Microsoft.Extensions.Options;
using System.Buffers;
using System.IO.Ports;
using System.Text;

namespace PagerController
{
    internal class PagerService : IDisposable
    {
        private readonly SerialPort _port;
        private readonly byte[] _receiveBuffer = new byte[1024];
        private int _position = 0;
        private event EventHandler<string>? LineReceived;

        public PagerService(IOptions<ControllerOptions> options)
        {
            var portName = options.Value.SerialPort;
            _port = new SerialPort(portName, 9600, Parity.None, 8, StopBits.One);
            _port.DataReceived += DataReceived;
            _port.Open();
        }

        private void DataReceived(object sender, SerialDataReceivedEventArgs e)
        {
            // Add to the receive buffer
            var chars = _port.ReadExisting();
            var bytes = Encoding.ASCII.GetBytes(chars);
            bytes.CopyTo(_receiveBuffer.AsSpan(_position));
            _position += bytes.Length;

            while (true)
            {
                var buffer = _receiveBuffer.AsSpan(0, _position);
                var lineLength = buffer.IndexOf((byte)'\n');
                if (lineLength == -1)
                {
                    break;
                }

                var lineSpan = buffer.Slice(0, lineLength);
                if (lineSpan[^1] == '\r')
                {
                    lineSpan = lineSpan[0..^1];
                }
                var line = Encoding.ASCII.GetString(lineSpan);
                LineReceived?.Invoke(this, line);

                // Remove the processed line from the buffer
                var keep = _position - (lineLength + 1);
                Array.Copy(_receiveBuffer, lineLength + 1, _receiveBuffer, 0, keep);
                _position -= lineLength + 1;
            }
        }

        public async Task CallAsync(
            int restaurantId,
            int pagerId,
            CancellationToken cancellationToken = default
        )
        {
            var stream = _port.BaseStream;

            using var done = new SemaphoreSlim(0);

            LineReceived += HandleResponse;

            var cmd = $"CALL:{restaurantId};{pagerId}";
            var cmdBytes = Encoding.ASCII.GetBytes(cmd + '\n');
            await stream.WriteAsync(cmdBytes, cancellationToken);
            await stream.FlushAsync(cancellationToken);

            try
            {
                await done.WaitAsync(cancellationToken);
            }
            finally
            {
                LineReceived -= HandleResponse;
            }

            void HandleResponse(object? sender, string line)
            {
                if (line == "DONE")
                {
                    done.Release();
                }
            }
        }

        public void Dispose()
        {
            _port.Close();
            _port.Dispose();
        }
    }
}
