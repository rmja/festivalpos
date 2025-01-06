using System.Text;

namespace FestivalPOS.Printing
{
    public class EscPosWriter(Stream stream) : IDisposable
    {
        private const byte ESC = 0x1b;
        private const byte GS = 0x1d;
        private const byte LF = 0x0a;
        public int LineWidth = 42;

        public void Initialize()
        {
            stream.WriteByte(ESC);
            stream.WriteByte((byte)'@');
        }

        public void SetCodeTable(CodeTable value)
        {
            stream.WriteByte(ESC);
            stream.WriteByte((byte)'t');
            stream.WriteByte((byte)value);
        }

        public void SetHorizontalTabPositions(params int[] positions)
        {
            stream.WriteByte(ESC);
            stream.WriteByte((byte)'D');
            foreach (var position in positions)
            {
                stream.WriteByte((byte)position);
            }
            stream.WriteByte(0);
        }

        public void SetFontSize(int width, int height)
        {
            stream.WriteByte(ESC);
            stream.WriteByte((byte)'i');
            stream.WriteByte((byte)width);
            stream.WriteByte((byte)height);
        }

        public void SetEmphasize(bool value)
        {
            stream.WriteByte(ESC);
            stream.WriteByte((byte)'E');
            stream.WriteByte((byte)(value ? 1 : 0));
        }

        public void Newline()
        {
            stream.WriteByte(LF);
        }

        public void Text(string value)
        {
            var encoding = Encoding.GetEncoding(1252);
            stream.Write(encoding.GetBytes(value));
        }

        public void HorizontalTab()
        {
            stream.WriteByte(0x09);
        }

        public void CutPaper(bool partialCut = false)
        {
            stream.WriteByte(GS);
            stream.WriteByte((byte)'V');
            stream.WriteByte((byte)(partialCut ? 1 : 0));
        }

        public void Dispose()
        {
            stream.Dispose();
        }
    }

    public enum CodeTable
    {
        Latin1_Windows1252 = 16,
        Nordic_PC865 = 5,
        Euro_PC858 = 19
    }
}
