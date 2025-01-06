using FestivalPOS.Hubs;
using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace FestivalPOS.NotificationHandlers;

public class SendPrintToTerminalHandler(IHubContext<PrintingHub> hub, PrintQueue printQueue)
    : INotificationHandler<PrintJobCreatedNotification>
{
    public async Task Handle(
        PrintJobCreatedNotification notification,
        CancellationToken cancellationToken
    )
    {
        PrintJob? job;
        while ((job = await printQueue.DequeueAsync(notification.PrinterId)) != null)
        {
            var clients = hub.Clients.Group($"Printers:{notification.PrinterId}");
            await clients.SendAsync("Print", job);
        }
    }
}
