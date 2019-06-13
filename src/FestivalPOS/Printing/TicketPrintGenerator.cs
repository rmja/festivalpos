using FestivalPOS.Models;
using System.IO;

namespace FestivalPOS.Printing
{
    public class TicketPrintGenerator
    {
        public byte[] Generate(Order order)
        {
            using (var stream = new MemoryStream())
            using (var writer = new EscPosWriter(stream))
            {
                writer.Initialize();
                writer.SetCodeTable(CodeTable.Latin1_Windows1252);

                WriteHeader(writer, order);
                WriteReceiveableLines(writer, order);

                for (var i = 0; i < 5; i++)
                {
                    writer.Newline();
                }

                writer.CutPaper();

                return stream.ToArray();
            }
        }

        private static void WriteHeader(EscPosWriter writer, Order order)
        {
            writer.Text($"Billet {order.Id}");
            writer.Newline();
        }

        private static void WriteReceiveableLines(EscPosWriter writer, Order order)
        {
            writer.SetHorizontalTabPositions(4);

            foreach (var line in order.Lines)
            {
                if (line.Receiveable > 0)
                {
                    writer.Text(line.Receiveable.ToString());
                    writer.HorizontalTab();
                    writer.Text(line.Name);
                    writer.Newline();
                }
            }
        }
    }
}
