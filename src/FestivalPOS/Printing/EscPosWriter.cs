using System.Text;

namespace FestivalPOS.Printing
{
    public class EscPosWriter : IDisposable
    {
        private const byte ESC = 0x1b;
        private const byte GS = 0x1d;
        private const byte LF = 0x0a;
        private readonly Stream _stream;

        public int LineWidth = 42;

        public EscPosWriter(Stream stream)
        {
            _stream = stream;
        }

        public void Initialize()
        {
            _stream.WriteByte(ESC);
            _stream.WriteByte((byte)'@');
        }

        public void SetCodeTable(CodeTable value)
        {
            _stream.WriteByte(ESC);
            _stream.WriteByte((byte)'t');
            _stream.WriteByte((byte)value);
        }

        public void SetHorizontalTabPositions(params int[] positions)
        {
            _stream.WriteByte(ESC);
            _stream.WriteByte((byte)'D');
            foreach (var position in positions)
            {
                _stream.WriteByte((byte)position);
            }
            _stream.WriteByte(0);
        }

        public void SetFontSize(int width, int height)
        {
            _stream.WriteByte(ESC);
            _stream.WriteByte((byte)'i');
            _stream.WriteByte((byte)width);
            _stream.WriteByte((byte)height);
        }

        public void SetEmphasize(bool value)
        {
            _stream.WriteByte(ESC);
            _stream.WriteByte((byte)'E');
            _stream.WriteByte((byte)(value ? 1 : 0));
        }

        public void Newline()
        {
            _stream.WriteByte(LF);
        }

        public void Text(string value)
        {
            var encoding = Encoding.GetEncoding(1252);
            _stream.Write(encoding.GetBytes(value));
        }

        public void HorizontalTab()
        {
            _stream.WriteByte(0x09);
        }

        public void CutPaper(bool partialCut = false)
        {
            _stream.WriteByte(GS);
            _stream.WriteByte((byte)'V');
            _stream.WriteByte((byte)(partialCut ? 1 : 0));
        }

        public void Dispose()
        {
            _stream.Dispose();
        }
    }

    public enum CodeTable
    {
        Latin1_Windows1252 = 16,
        Nordic_PC865 = 5,
        Euro_PC858 = 19
    }
}
