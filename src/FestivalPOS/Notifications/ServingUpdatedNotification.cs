using MediatR;

namespace FestivalPOS.Notifications
{
    public class ServingUpdatedNotification : INotification
    {
        public int ServingId { get; }

        public ServingUpdatedNotification(int servingId)
        {
            ServingId = servingId;
        }
    }
}
