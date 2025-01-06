using VibrantApi;

#pragma warning disable IDE0130 // Namespace does not match folder structure

namespace Microsoft.Extensions.DependencyInjection;

public static class VibrantApiExtensions
{
    public static IServiceCollection AddVibrantApi(
        this IServiceCollection services,
        Action<VibrantApiOptions>? configureAction = null
    )
    {
        services.AddHttpClient<VibrantApiClient>();

        services.AddSingleton<IVibrantApiClientFactory, VibrantApiClientFactory>();

        if (configureAction is not null)
        {
            services.AddTransient<IVibrantApiClient, VibrantApiClient>().Configure(configureAction);
        }

        return services;
    }
}
