using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class PrintImmediateServingHandler : INotificationHandler<OrderPayedNotification>
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;
        private readonly PrintDispatcher _printDispatcher;
        private readonly ServingPrintGenerator _servingPrintGenerator;
        private readonly PrintQueue _printQueue;

        public PrintImmediateServingHandler(IMediator mediator, PosContext db, PrintDispatcher printDispatcher, ServingPrintGenerator servingPrintGenerator, PrintQueue printQueue)
        {
            _mediator = mediator;
            _db = db;
            _printDispatcher = printDispatcher;
            _servingPrintGenerator = servingPrintGenerator;
            _printQueue = printQueue;
        }

        public async Task Handle(OrderPayedNotification notification, CancellationToken cancellationToken)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .FirstAsync(x => x.Id == notification.OrderId);

            if (order.Lines.Any(x => x.Receiveable == 0 && x.Product?.IsServing == true))
            {
                var printerId = await _printDispatcher.GetServingPrinterAsync(order.Id);

                if (printerId != null)
                {
                    var data = _servingPrintGenerator.Generate(order, order.PointOfSaleId);
                    await _printQueue.EnqueueAsync(printerId.Value, new PrintJob()
                    {
                        Name = $"Servering {order.Id}",
                        Data = data
                    });
                    await _mediator.Publish(new PrintJobCreated(printerId.Value));
                }
            }
        }
    }
}
