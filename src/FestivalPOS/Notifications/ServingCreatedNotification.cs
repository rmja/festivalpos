using MediatR;

namespace FestivalPOS.Notifications
{
    public class ServingCreatedNotification(int servingId) : INotification
    {
        public int ServingId { get; } = servingId;
    }
}
