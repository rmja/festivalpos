using FestivalPOS.Models;
using System.IO;
using System.Text;

namespace FestivalPOS.Printing
{
    public class ServingPrintGenerator
    {
        public byte[] Generate(Order order, int pointOfSaleId)
        {
            using (var stream = new MemoryStream())
            using (var writer = new EscPosWriter(stream))
            {
                writer.Initialize();
                writer.SetCodeTable(CodeTable.Latin1_Windows1252);

                WriteHeader(writer, order);
                WriteLines(writer, order);

                return stream.ToArray();
            }
        }

        private static void WriteHeader(EscPosWriter writer, Order order)
        {
            writer.Text($"Billet {order.Id}");
            writer.Newline();
        }

        private static void WriteLines(EscPosWriter writer, Order order)
        {
            writer.SetHorizontalTabPositions(
                4,
                writer.LineWidth - 9 - 1 - 9,
                writer.LineWidth - 9);

            writer.HorizontalTab();
            writer.HorizontalTab();
            writer.Text("       á");
            writer.HorizontalTab();
            writer.Text("    Pris");
            writer.Newline();

            foreach (var line in order.Lines)
            {
                writer.Text(line.Quantity.ToString());
                writer.HorizontalTab();
                writer.Text(line.Name.Substring(0, 10));
                writer.HorizontalTab();
                if (line.Product != null)
                {
                    writer.Text(line.Product.Price.ToString());
                }
                writer.HorizontalTab();
                writer.Text(line.Total.ToString());
                writer.Newline();
            }
        }
    }
}
