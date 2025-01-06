using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers
{
    public class UnassignTagsWhenServingIsCompletedHandler(PosContext db)
        : INotificationHandler<ServingUpdatedNotification>
    {
        public async Task Handle(
            ServingUpdatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var serving = await db.Servings.FirstAsync(x => x.Id == notification.ServingId);

            if (serving.State == ServingState.Completed)
            {
                var now = LocalClock.Now;
                var tags = await db
                    .OrderTags.Where(x => x.OrderId == serving.OrderId && x.Detached == null)
                    .ToListAsync();

                foreach (var tag in tags)
                {
                    tag.Detached = now;
                }

                await db.SaveChangesAsync();
            }
        }
    }
}
