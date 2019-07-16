using MediatR;

namespace FestivalPOS.Notifications
{
    public class OrderTagAssignedNotification : INotification
    {
        public int OrderId { get; }
        public int TagNumber { get; }

        public OrderTagAssignedNotification(int orderId, int tagNumber)
        {
            OrderId = orderId;
            TagNumber = tagNumber;
        }
    }
}
