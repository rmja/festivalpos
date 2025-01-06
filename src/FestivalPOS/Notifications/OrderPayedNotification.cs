using MediatR;

namespace FestivalPOS.Notifications
{
    public class OrderPayedNotification(int orderId, int paymentId) : INotification
    {
        public int OrderId { get; } = orderId;
        public int PaymentId { get; } = paymentId;
    }
}
