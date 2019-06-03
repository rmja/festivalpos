using System;
using System.Linq;
using System.Threading.Tasks;
using FestivalPOS.Printing;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Hubs
{
    public class PrintingHub : Hub
    {
        private readonly PosContext _db;
        private readonly PrintQueue _printQueue;

        public PrintingHub(PosContext db, PrintQueue printQueue)
        {
            _db = db;
            _printQueue = printQueue;
        }

        public async Task Hello(int terminalId)
        {
            var printerIds = await _db.Printers.Where(x => x.TerminalId == terminalId).Select(x => x.Id).ToListAsync();
           
            foreach (var printerId in printerIds)
            {
                PrintJob job;

                await Groups.AddToGroupAsync(Context.ConnectionId, $"printers:{printerId}");

                while ((job = await _printQueue.DequeueAsync(printerId)) != null)
                {
                    await Clients.Caller.SendAsync("Print", job);
                }
            }
        }
    }
}
