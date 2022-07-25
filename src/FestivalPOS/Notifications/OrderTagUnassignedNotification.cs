using MediatR;

namespace FestivalPOS.Notifications
{
    public class OrderTagUnassignedNotification : INotification
    {
        public int OrderId { get; }
        public int TagNumber { get; }

        public OrderTagUnassignedNotification(int orderId, int tagNumber)
        {
            OrderId = orderId;
            TagNumber = tagNumber;
        }
    }
}
