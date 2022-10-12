using FestivalPOS.Converters;
using FestivalPOS.Models;
using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PagerController
{
    internal class HubListener : IHostedService
    {
        private readonly HubConnection _hub;
        private readonly PagerService _pagerService;
        private readonly ControllerOptions _options;

        public HubListener(PagerService pagerService, IOptions<ControllerOptions> options)
        {
            _pagerService = pagerService;
            _options = options.Value;

            _hub = new HubConnectionBuilder()
                .WithUrl(_options.ServingHub)
                .WithAutomaticReconnect()
                .ConfigureLogging(logging => logging.AddConsole())
                .AddJsonProtocol(options =>
                {
                    options.PayloadSerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
                    options.PayloadSerializerOptions.Converters.Add(new DecimalConverter());
                })
                .Build();

            _hub.On("ServingCreated", (Serving serving) => { });
            _hub.On("ServingUpdated", new Func<Serving, Task>(OnServingUpdatedAsync));
            _hub.On("PointOfSaleUpdated", (PointOfSale pos) => { });
        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            await _hub.StartAsync(cancellationToken);
            await _hub.SendAsync("Hello", _options.PointOfSaleId, cancellationToken);
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await _hub.StopAsync(cancellationToken);
        }

        private async Task OnServingUpdatedAsync(Serving serving)
        {
            if (serving.State == ServingState.Ongoing && serving.TagNumber.HasValue)
            {
                await _pagerService.CallAsync(_options.RestaurantId, serving.TagNumber.Value);
            }
        }
    }
}
