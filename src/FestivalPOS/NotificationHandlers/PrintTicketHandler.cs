using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class PrintTicketHandler : INotificationHandler<OrderPayedNotification>
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;
        private readonly PrintDispatcher _printDispatcher;
        private readonly TicketPrintGenerator _ticketPrintGenerator;
        private readonly PrintQueue _printQueue;

        public PrintTicketHandler(IMediator mediator, PosContext db, PrintDispatcher printDispatcher, TicketPrintGenerator ticketPrintGenerator, PrintQueue printQueue)
        {
            _mediator = mediator;
            _db = db;
            _printDispatcher = printDispatcher;
            _ticketPrintGenerator = ticketPrintGenerator;
            _printQueue = printQueue;
        }

        public async Task Handle(OrderPayedNotification notification, CancellationToken cancellationToken)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .FirstAsync(x => x.Id == notification.OrderId);

            if (order.Lines.Any(x => x.Receiveable > 0))
            {
                var printerId = await _printDispatcher.GetTicketPrinterAsync(order.Id);

                if (printerId != null)
                {
                    var data = _ticketPrintGenerator.Generate(order);
                    await _printQueue.EnqueueAsync(new PrintJob()
                    {
                        PrinterId = printerId.Value,
                        Name = $"Billet {order.Id}",
                        Data = data
                    });
                    await _mediator.Publish(new PrintJobCreated(printerId.Value));
                }
            }
        }
    }
}
