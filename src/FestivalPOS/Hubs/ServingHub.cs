using Microsoft.AspNetCore.SignalR;

namespace FestivalPOS.Hubs
{
    public class ServingHub(ILogger<ServingHub> logger) : Hub
    {
        public async Task Hello(int pointOfSaleId)
        {
            logger.LogInformation("Point of sale {} is joining", pointOfSaleId);

            await Groups.AddToGroupAsync(Context.ConnectionId, $"PointsOfSale:{pointOfSaleId}");
        }

        public async Task HelloAll()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"PointsOfSale:All");
        }
    }
}
