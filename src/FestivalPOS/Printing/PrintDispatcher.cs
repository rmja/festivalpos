using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FestivalPOS.Printing
{
    public class PrintDispatcher
    {
        private readonly PosContext _db;

        public PrintDispatcher(PosContext db)
        {
            _db = db;
        }

        public async Task<int?> GetReceiptPrinterAsync(int pointOfSaleId)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == pointOfSaleId);
            return pos?.ReceiptPrinterId;
        }

        public async Task<int?> GetTicketPrinterAsync(int pointOfSaleId)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == pointOfSaleId);
            return pos?.TicketPrinterId;
        }

        public async Task<int?> GetServingPrinterAsync(int pointOfSaleId)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == pointOfSaleId);
            return pos?.ServingPrinterId;
        }
    }
}
