using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace VibrantApi;

public class VibrantApiClientFactory(IServiceProvider services) : IVibrantApiClientFactory
{
    private readonly ObjectFactory<VibrantApiClient> _clientFactory =
        ActivatorUtilities.CreateFactory<VibrantApiClient>([typeof(IOptions<VibrantApiOptions>)]);

    public IVibrantApiClient Create(VibrantApiOptions options)
    {
        var apiOptions = Options.Create(options);
        var client = _clientFactory(services, [apiOptions]);
        return client;
    }
}
