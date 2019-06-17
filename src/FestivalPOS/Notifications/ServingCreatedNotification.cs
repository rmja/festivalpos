using MediatR;

namespace FestivalPOS.Notifications
{
    public class ServingCreatedNotification : INotification
    {
        public int ServingId { get; }

        public ServingCreatedNotification(int servingId)
        {
            ServingId = servingId;
        }
    }
}
