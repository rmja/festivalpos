using System.Text.Json;

namespace FestivalPOS.VibrantApi
{
    public class VibrantApiClient(IHttpClientFactory httpClientFactory)
    {
        private const string ApiKeyHeaderName = "ApiKey";
        private static readonly JsonSerializerOptions _jsonSerializerOptions =
            new() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase, };

        public bool Sandbox { get; set; }
        public required string ApiKey { get; set; }

        public async Task<string> CreatePaymentIntentAsync(
            PaymentIntent paymentIntent,
            CancellationToken cancellationToken
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            var url =
                GetBaseUrl() + $"/terminals/{paymentIntent.TerminalId}/process_payment_intent";
            var response = await client.PostAsJsonAsync(
                url,
                new { paymentIntent },
                _jsonSerializerOptions,
                cancellationToken
            );
            response.EnsureSuccessStatusCode();
            var details = await response.Content.ReadFromJsonAsync<ProcessPaymentIntentResponse>(
                cancellationToken
            );
            return details!.ObjectIdToProcess;
        }

        public async Task<PaymentIntent> GetPaymentIntentAsync(
            string paymentIntentId,
            CancellationToken cancellationToken
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            var url = GetBaseUrl() + $"/payment_intents/{paymentIntentId}";

            var paymentIntent = await client.GetFromJsonAsync<PaymentIntent>(
                url,
                _jsonSerializerOptions,
                cancellationToken
            );
            return paymentIntent!;
        }

        public async Task<Terminal> CreateTerminalAsync(
            Terminal terminal,
            CancellationToken cancellationToken
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            terminal.Descriptor ??= terminal.Name;

            var url = GetBaseUrl() + "/terminals";
            var response = await client.PostAsJsonAsync(
                url,
                terminal,
                _jsonSerializerOptions,
                cancellationToken
            );
            response.EnsureSuccessStatusCode();
            var created = await response.Content.ReadFromJsonAsync<Terminal>(
                _jsonSerializerOptions,
                cancellationToken
            );
            return created!;
        }

        public async Task<Terminal> GetTerminalAsync(
            string terminalId,
            CancellationToken cancellationToken = default
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            var url = GetBaseUrl() + $"/terminals/{terminalId}";
            var json = await client.GetStringAsync(url, cancellationToken);

            var terminal = await client.GetFromJsonAsync<Terminal>(
                url,
                _jsonSerializerOptions,
                cancellationToken
            );

            return terminal!;
        }

        public async Task<Terminal[]> GetTerminalsAsync(
            CancellationToken cancellationToken = default
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            var url = GetBaseUrl() + "/terminals";
            var json = await client.GetStringAsync(url, cancellationToken);

            var terminals = await client.GetFromJsonAsync<ListEnvelope<Terminal>>(
                url,
                _jsonSerializerOptions,
                cancellationToken
            );

            return terminals!.Data;
        }

        public async Task DeleteTerminalAsync(
            string terminalId,
            CancellationToken cancellationToken = default
        )
        {
            using var client = httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add(ApiKeyHeaderName, ApiKey);

            var url = GetBaseUrl() + $"/terminals/{terminalId}";
            var response = await client.DeleteAsync(url, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        private string GetBaseUrl()
        {
            return Sandbox
                ? "https://pos-api.sandbox.vibrant.app/pos/v1"
                : throw new NotSupportedException();
        }
    }
}
