using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers
{
    public class SetTagOnServingWhenTagIsAssigned
        : INotificationHandler<OrderTagAssignedNotification>
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;

        public SetTagOnServingWhenTagIsAssigned(IMediator mediator, PosContext db)
        {
            _mediator = mediator;
            _db = db;
        }

        public async Task Handle(
            OrderTagAssignedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var servings = await _db
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

                await _db.SaveChangesAsync();

                await Task.WhenAll(notifications.Select(x => _mediator.Publish(x)));
            }
        }
    }
}
