using MediatR;

namespace FestivalPOS.Notifications
{
    public class OrderPayedNotification : INotification
    {
        public int OrderId { get; }

        public OrderPayedNotification(int orderId)
        {
            OrderId = orderId;
        }
    }
}
