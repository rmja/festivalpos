using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class RemoveTagOnServingWhenUnassigned : INotificationHandler<OrderTagUnassignedNotification>
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;

        public RemoveTagOnServingWhenUnassigned(IMediator mediator, PosContext db)
        {
            _mediator = mediator;
            _db = db;
        }

        public async Task Handle(OrderTagUnassignedNotification notification, CancellationToken cancellationToken)
        {
            var servings = await _db.Servings
                .Where(x => x.OrderId == notification.OrderId && x.State == ServingState.Pending && x.TagNumber == notification.TagNumber)
                .ToListAsync();

            if (servings.Count > 0)
            {
                var notifications = new List<INotification>(servings.Count);

                foreach (var serving in servings)
                {
                    serving.TagNumber = null;
                    notifications.Add(new ServingUpdatedNotification(serving.Id));
                }

                await _db.SaveChangesAsync();

                await Task.WhenAll(notifications.Select(x => _mediator.Publish(x)));
            }
        }
    }
}
