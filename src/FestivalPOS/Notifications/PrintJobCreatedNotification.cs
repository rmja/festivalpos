using MediatR;

namespace FestivalPOS.Notifications
{
    public class PrintJobCreatedNotification(int printerId) : INotification
    {
        public int PrinterId { get; } = printerId;
    }
}
