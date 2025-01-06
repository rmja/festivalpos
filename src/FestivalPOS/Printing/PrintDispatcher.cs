using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Printing;

public class PrintDispatcher(PosContext db)
{
    public async Task<int?> GetReceiptPrinterAsync(int pointOfSaleId)
    {
        var pos = await db.PointOfSales.FirstOrDefaultAsync(x => x.Id == pointOfSaleId);

        return pos?.ReceiptPrinterId;
    }
}
