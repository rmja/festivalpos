using MediatR;

namespace FestivalPOS.Notifications
{
    public class PrintJobCreatedNotification : INotification
    {
        public int PrinterId { get; }

        public PrintJobCreatedNotification(int printerId)
        {
            PrinterId = printerId;
        }
    }
}
