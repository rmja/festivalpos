using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers
{
    public class CompleteServingWhenTagIsUnassigned(IMediator mediator, PosContext db)
        : INotificationHandler<OrderTagUnassignedNotification>
    {
        public async Task Handle(
            OrderTagUnassignedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var servings = await db
                .Servings.Where(x =>
                    x.OrderId == notification.OrderId
                    && x.State != ServingState.Completed
                    && x.TagNumber == notification.TagNumber
                )
                .ToListAsync();

            if (servings.Count > 0)
            {
                var now = LocalClock.Now;
                var notifications = new List<INotification>(servings.Count);

                foreach (var serving in servings)
                {
                    serving.Completed = now;
                    serving.State = ServingState.Completed;
                    notifications.Add(new ServingUpdatedNotification(serving.Id));
                }

                await db.SaveChangesAsync();

                await Task.WhenAll(notifications.Select(x => mediator.Publish(x)));
            }
        }
    }
}
