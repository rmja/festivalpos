using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace FestivalPOS.Hubs
{
    public class ServingHub : Hub
    {
        private readonly ILogger<ServingHub> _logger;

        public ServingHub(ILogger<ServingHub> logger)
        {
            _logger = logger;
        }

        public async Task Hello(int pointOfSaleId)
        {
            _logger.LogInformation("Point of sale {} is joining", pointOfSaleId);

            await Groups.AddToGroupAsync(Context.ConnectionId, $"PointsOfSale:{pointOfSaleId}");
        }

        public async Task HelloAll()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"PointsOfSale:All");
        }
    }
}
