using FestivalPOS.Hubs;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.NotificationHandlers
{
    public class SendToServingHubHandler(PosContext db, IHubContext<ServingHub> hub)
        : INotificationHandler<ServingCreatedNotification>,
            INotificationHandler<ServingUpdatedNotification>,
            INotificationHandler<PointOfSaleUpdatedNotification>
    {
        public async Task Handle(
            ServingCreatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var serving = await db
                .Servings.Include(x => x.Lines.OrderBy(l => l.Position))
                .FirstAsync(x => x.Id == notification.ServingId, cancellationToken);

            var clients = hub.Clients.Groups(
                [$"PointsOfSale:{serving.PointOfSaleId}", "PointsOfSale:All"]
            );

            await clients.SendAsync("ServingCreated", serving, cancellationToken);
        }

        public async Task Handle(
            ServingUpdatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var serving = await db
                .Servings.Include(x => x.Lines.OrderBy(l => l.Position))
                .FirstAsync(x => x.Id == notification.ServingId, cancellationToken);

            var clients = hub.Clients.Groups(
                [$"PointsOfSale:{serving.PointOfSaleId}", "PointsOfSale:All"]
            );

            await clients.SendAsync("ServingUpdated", serving, cancellationToken);
        }

        public async Task Handle(
            PointOfSaleUpdatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            var pos = await db
                .PointOfSales.Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .FirstAsync(x => x.Id == notification.PointOfSaleId, cancellationToken);

            var clients = hub.Clients.Groups([$"PointsOfSale:{pos.Id}", "PointsOfSale:All"]);

            await clients.SendAsync("PointOfSaleUpdated", pos, cancellationToken);
        }
    }
}
