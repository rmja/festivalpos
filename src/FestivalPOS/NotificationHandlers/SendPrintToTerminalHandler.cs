using FestivalPOS.Hubs;
using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace FestivalPOS.NotificationHandlers
{
    public class SendPrintToTerminalHandler : INotificationHandler<PrintJobCreatedNotification>
    {
        private readonly IHubContext<PrintingHub> _hub;
        private readonly PrintQueue _printQueue;

        public SendPrintToTerminalHandler(IHubContext<PrintingHub> hub, PrintQueue printQueue)
        {
            _hub = hub;
            _printQueue = printQueue;
        }

        public async Task Handle(
            PrintJobCreatedNotification notification,
            CancellationToken cancellationToken
        )
        {
            PrintJob? job;
            while ((job = await _printQueue.DequeueAsync(notification.PrinterId)) != null)
            {
                var clients = _hub.Clients.Group($"Printers:{notification.PrinterId}");
                await clients.SendAsync("Print", job);
            }
        }
    }
}
