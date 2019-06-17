using FestivalPOS.Hubs;
using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.NotificationHandlers
{
    public class SendServingToHubHandler :
        INotificationHandler<ServingCreatedNotification>,
        INotificationHandler<ServingUpdatedNotification>
    {
        private readonly PosContext _db;
        private readonly IHubContext<ServingHub> _hub;

        public SendServingToHubHandler(PosContext db, IHubContext<ServingHub> hub)
        {
            _db = db;
            _hub = hub;
        }

        public async Task Handle(ServingCreatedNotification notification, CancellationToken cancellationToken)
        {
            var serving = await _db.Servings
                .Include(x => x.Lines)
                .FirstAsync(x => x.Id == notification.ServingId);

            serving.OnMaterialized();

            var clients = _hub.Clients.Group($"PointsOfSale:{serving.PointOfSaleId}");

            await clients.SendAsync("ServingCreated", serving);
        }

        public async Task Handle(ServingUpdatedNotification notification, CancellationToken cancellationToken)
        {
            var serving = await _db.Servings
                .Include(x => x.Lines)
                .FirstAsync(x => x.Id == notification.ServingId);

            serving.OnMaterialized();

            var clients = _hub.Clients.Group($"PointsOfSale:{serving.PointOfSaleId}");

            await clients.SendAsync("ServingUpdated", serving);
        }
    }
}
