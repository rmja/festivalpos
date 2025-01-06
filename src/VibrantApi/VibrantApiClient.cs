using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.Extensions.Options;
using Refit;
using VibrantApi.Operations;

namespace VibrantApi;

public class VibrantApiClient : IVibrantApiClient
{
    private static readonly JsonSerializerOptions _jsonSerializerOptions =
        new() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase, };
    private static readonly RefitSettings _refitSettings =
        new()
        {
            ContentSerializer = new SystemTextJsonContentSerializer(_jsonSerializerOptions),
            ExceptionFactory = async response =>
            {
                if (response.IsSuccessStatusCode)
                {
                    return null;
                }
                var error = await response.Content.ReadFromJsonAsync<ErrorResponse>();
                return new VibrantApiException(error!.Status, error.Error);
            }
        };

    public IPaymentIntentOperations PaymentIntents { get; }

    public ITerminalsOperations Terminals { get; }

    public VibrantApiClient(HttpClient httpClient, IOptions<VibrantApiOptions> options)
    {
        if (options.Value.Sandbox)
        {
            httpClient.BaseAddress = new("https://pos-api.sandbox.vibrant.app");
        }
        else
        {
            httpClient.BaseAddress = new("https://pos.api.vibrant.app");
        }

        httpClient.DefaultRequestHeaders.TryAddWithoutValidation("ApiKey", options.Value.ApiKey);

        PaymentIntents = RestService.For<IPaymentIntentOperations>(httpClient, _refitSettings);
        Terminals = RestService.For<ITerminalsOperations>(httpClient, _refitSettings);
    }
}
