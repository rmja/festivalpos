using System.Text.Json;
using System.Text.Json.Serialization;
using FestivalPOS.Converters;
using FestivalPOS.Models;
using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace PagerController;

internal class HubListener : IHostedService
{
    private readonly HubConnection _hub;
    private readonly PagerService _pagerService;
    private readonly ControllerOptions _options;
    private readonly ILogger<HubListener> _logger;

    public HubListener(
        PagerService pagerService,
        IOptions<ControllerOptions> options,
        ILogger<HubListener> logger
    )
    {
        _pagerService = pagerService;
        _options = options.Value;
        _logger = logger;

        _hub = new HubConnectionBuilder()
            .WithUrl(_options.ServingHub)
            .WithAutomaticReconnect()
            .ConfigureLogging(logging => logging.AddConsole())
            .AddJsonProtocol(options =>
            {
                options.PayloadSerializerOptions.Converters.Add(
                    new JsonStringEnumConverter(JsonNamingPolicy.CamelCase)
                );
                options.PayloadSerializerOptions.Converters.Add(new DecimalConverter());
            })
            .Build();

        _hub.On("ServingCreated", (Serving serving) => { });
        _hub.On("ServingUpdated", new Func<Serving, Task>(OnServingUpdatedAsync));
        _hub.On("PointOfSaleUpdated", (PointOfSale pos) => { });
        _hub.Reconnected += (connectionId) => SayHelloAsync(CancellationToken.None);
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        await _hub.StartAsync(cancellationToken);
        await SayHelloAsync(cancellationToken);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _hub.StopAsync(cancellationToken);
    }

    private async Task SayHelloAsync(CancellationToken cancellationToken)
    {
        if (_options.PointOfSaleIds is not null)
        {
            foreach (var id in _options.PointOfSaleIds)
            {
                _logger.LogInformation("Sending hello to pos {}", id);
                await _hub.SendAsync("Hello", id, cancellationToken);
            }
        }
        else
        {
            _logger.LogInformation("Sending broadcast hello");
            await _hub.SendAsync("HelloAll", cancellationToken);
        }
    }

    private async Task OnServingUpdatedAsync(Serving serving)
    {
        if (serving.State == ServingState.Ongoing && serving.TagNumber.HasValue)
        {
            _logger.LogInformation(
                "Calling pager {} for pos {}",
                serving.TagNumber,
                serving.PointOfSaleId
            );

            await _pagerService.CallAsync(_options.RestaurantId, serving.TagNumber.Value);
        }
    }
}
