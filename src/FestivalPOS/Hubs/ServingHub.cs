using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace FestivalPOS.Hubs
{
    public class ServingHub : Hub
    {
        public async Task Hello(int pointOfSaleId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"PointsOfSale:{pointOfSaleId}");
        }
    }
}
