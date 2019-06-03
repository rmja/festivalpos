using FestivalPOS.Models;
using System.Text;

namespace FestivalPOS.Printing
{
    public class ReceiptPrintGenerator
    {
        public byte[] Generate(Order order)
        {
            return Encoding.ASCII.GetBytes("ESC/POS");
        }
    }
}
