using FestivalPOS.Hubs;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class SendToServingHubHandler :
        INotificationHandler<ServingCreatedNotification>,
        INotificationHandler<ServingUpdatedNotification>,
        INotificationHandler<PointOfSaleUpdatedNotification>
    {
        private readonly PosContext _db;
        private readonly IHubContext<ServingHub> _hub;

        public SendToServingHubHandler(PosContext db, IHubContext<ServingHub> hub)
        {
            _db = db;
            _hub = hub;
        }

        public async Task Handle(ServingCreatedNotification notification, CancellationToken cancellationToken)
        {
            var serving = await _db.Servings
                .Include(x => x.Lines.OrderBy(l => l.Position))
                .FirstAsync(x => x.Id == notification.ServingId ,cancellationToken);

            var clients = _hub.Clients.Group($"PointsOfSale:{serving.PointOfSaleId}");

            await clients.SendAsync("ServingCreated", serving, cancellationToken);
        }

        public async Task Handle(ServingUpdatedNotification notification, CancellationToken cancellationToken)
        {
            var serving = await _db.Servings
                .Include(x => x.Lines.OrderBy(l => l.Position))
                .FirstAsync(x => x.Id == notification.ServingId, cancellationToken);

            var clients = _hub.Clients.Group($"PointsOfSale:{serving.PointOfSaleId}");

            await clients.SendAsync("ServingUpdated", serving, cancellationToken);
        }

        public async Task Handle(PointOfSaleUpdatedNotification notification, CancellationToken cancellationToken)
        {
            var pos = await _db.PointOfSales
                .Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .FirstAsync(x => x.Id == notification.PointOfSaleId, cancellationToken);

            var clients = _hub.Clients.Group($"PointsOfSale:{pos.Id}");

            await clients.SendAsync("PointOfSaleUpdated", pos, cancellationToken);
        }
    }
}
