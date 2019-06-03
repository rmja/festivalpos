using FestivalPOS.Models;
using System.Text;

namespace FestivalPOS.Printing
{
    public class ServingPrintGenerator
    {
        public byte[] Generate(Order order, int pointOfSaleId)
        {
            return Encoding.ASCII.GetBytes("Servering");
        }
    }
}
