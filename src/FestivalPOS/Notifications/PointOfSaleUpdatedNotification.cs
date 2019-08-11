using MediatR;

namespace FestivalPOS.Notifications
{
    public class PointOfSaleUpdatedNotification : INotification
    {
        public int PointOfSaleId { get; set; }

        public PointOfSaleUpdatedNotification(int pointOfSaleId)
        {
            PointOfSaleId = pointOfSaleId;
        }
    }
}
