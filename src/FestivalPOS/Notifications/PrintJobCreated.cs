using MediatR;

namespace FestivalPOS.Notifications
{
    public class PrintJobCreated : INotification
    {
        public int PrinterId { get; }

        public PrintJobCreated(int printerId)
        {
            PrinterId = printerId;
        }
    }
}
