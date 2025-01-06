using System.Text;
using FestivalPOS.Models;

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
