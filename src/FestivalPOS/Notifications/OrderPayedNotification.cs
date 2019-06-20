using MediatR;

namespace FestivalPOS.Notifications
{
    public class OrderPayedNotification : INotification
    {
        public int OrderId { get; }
        public int PaymentId { get; }

        public OrderPayedNotification(int orderId, int paymentId)
        {
            OrderId = orderId;
            PaymentId = paymentId;
        }
    }
}
