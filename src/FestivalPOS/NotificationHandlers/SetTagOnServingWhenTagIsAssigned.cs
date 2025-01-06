using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers;

public class SetTagOnServingWhenTagIsAssigned(IMediator mediator, PosContext db)
    : INotificationHandler<OrderTagAssignedNotification>
{
    public async Task Handle(
        OrderTagAssignedNotification notification,
        CancellationToken cancellationToken
    )
    {
        var servings = await db
            .Servings.Where(x =>
                x.OrderId == notification.OrderId
                && x.State == ServingState.Pending
                && x.TagNumber == null
            )
            .ToListAsync();

        if (servings.Count > 0)
        {
            var notifications = new List<INotification>(servings.Count);

            foreach (var serving in servings)
            {
                serving.TagNumber = notification.TagNumber;
                notifications.Add(new ServingUpdatedNotification(serving.Id));
            }

            await db.SaveChangesAsync();

            await Task.WhenAll(notifications.Select(x => mediator.Publish(x)));
        }
    }
}
