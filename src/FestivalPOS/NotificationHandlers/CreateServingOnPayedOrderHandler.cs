using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers
{
    public class CreateServingOnPayedOrderHandler : INotificationHandler<OrderPayedNotification>
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;

        public CreateServingOnPayedOrderHandler(IMediator mediator, PosContext db)
        {
            _mediator = mediator;
            _db = db;
        }

        public async Task Handle(
            OrderPayedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var order = await _db
                .Orders.Include(x => x.Lines)
                .FirstAsync(x => x.Id == notification.OrderId);
            var payment = await _db
                .Payments.Include(x => x.Account)
                .FirstAsync(x => x.Id == notification.PaymentId);

            var highPriority =
                payment.Method == PaymentMethod.Account
                && payment.Account?.HighPriorityServing == true;

            var servingLines = order
                .Lines.OrderBy(x => x.Position)
                .Where(x => x.IsServing)
                .Select(
                    (line, index) =>
                        new ServingLine()
                        {
                            Position = index,
                            OrderLineId = line.Id,
                            Name = line.Name,
                            Quantity = line.Quantity - line.Receiveable
                        }
                )
                .Where(x => x.Quantity > 0)
                .ToList();

            if (servingLines.Count > 0)
            {
                var newestTag = await _db
                    .OrderTags.OrderByDescending(x => x.Attached)
                    .FirstOrDefaultAsync(x => x.OrderId == order.Id && x.Detached == null);

                var serving = new Serving()
                {
                    OrderId = order.Id,
                    PointOfSaleId = order.PointOfSaleId,
                    State = ServingState.Pending,
                    HighPriority = highPriority,
                    Created = LocalClock.Now,
                    TagNumber = newestTag?.Number,
                    Lines = servingLines.ToList()
                };

                _db.Servings.Add(serving);

                await _db.SaveChangesAsync();

                await _mediator.Publish(new ServingCreatedNotification(serving.Id));
            }
        }
    }
}
