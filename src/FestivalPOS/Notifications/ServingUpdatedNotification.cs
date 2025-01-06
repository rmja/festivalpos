using MediatR;

namespace FestivalPOS.Notifications
{
    public class ServingUpdatedNotification(int servingId) : INotification
    {
        public int ServingId { get; } = servingId;
    }
}
