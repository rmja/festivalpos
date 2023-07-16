using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class UnassignTagsWhenServingIsCompletedHandler
        : INotificationHandler<ServingUpdatedNotification>
    {
        private readonly PosContext _db;

        public UnassignTagsWhenServingIsCompletedHandler(PosContext db)
        {
            _db = db;
        }

        public async Task Handle(
            ServingUpdatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var serving = await _db.Servings.FirstAsync(x => x.Id == notification.ServingId);

            if (serving.State == ServingState.Completed)
            {
                var now = LocalClock.Now;
                var tags = await _db.OrderTags
                    .Where(x => x.OrderId == serving.OrderId && x.Detached == null)
                    .ToListAsync();

                foreach (var tag in tags)
                {
                    tag.Detached = now;
                }

                await _db.SaveChangesAsync();
            }
        }
    }
}
