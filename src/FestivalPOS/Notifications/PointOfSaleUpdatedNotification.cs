using MediatR;

namespace FestivalPOS.Notifications;

public class PointOfSaleUpdatedNotification(int pointOfSaleId) : INotification
{
    public int PointOfSaleId { get; set; } = pointOfSaleId;
}
