using FestivalPOS.Printing;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Hubs;

public class PrintingHub(PosContext db, PrintQueue printQueue) : Hub
{
    public async Task Hello(int terminalId)
    {
        var printerIds = await db
            .Printers.Where(x => x.TerminalId == terminalId)
            .Select(x => x.Id)
            .ToListAsync();

        foreach (var printerId in printerIds)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"Printers:{printerId}");

            PrintJob? job;
            while ((job = await printQueue.DequeueAsync(printerId)) != null)
            {
                await Clients.Caller.SendAsync("Print", job);
            }
        }
    }
}
