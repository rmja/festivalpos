using FestivalPOS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FestivalPOS.Printing
{
    public class TicketPrintGenerator
    {
        public byte[] Generate(Order order)
        {
            return Encoding.ASCII.GetBytes("BILLET");
        }
    }
}
