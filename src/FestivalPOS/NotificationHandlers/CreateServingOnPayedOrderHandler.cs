using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers;

public class CreateServingOnPayedOrderHandler(IMediator mediator, PosContext db)
    : INotificationHandler<OrderPayedNotification>
{
    public async Task Handle(
        OrderPayedNotification notification,
        CancellationToken cancellationToken
    )
    {
        var order = await db
            .Orders.Include(x => x.Lines)
            .FirstAsync(x => x.Id == notification.OrderId);
        var payment = await db
            .Payments.Include(x => x.Account)
            .FirstAsync(x => x.Id == notification.PaymentId);

        var highPriority =
            payment.Method == PaymentMethod.Account && payment.Account?.HighPriorityServing == true;

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
            var newestTag = await db
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

            db.Servings.Add(serving);

            await db.SaveChangesAsync();

            await mediator.Publish(new ServingCreatedNotification(serving.Id));
        }
    }
}
