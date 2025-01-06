using MediatR;

namespace FestivalPOS.Notifications;

public class OrderTagUnassignedNotification(int orderId, int tagNumber) : INotification
{
    public int OrderId { get; } = orderId;
    public int TagNumber { get; } = tagNumber;
}
