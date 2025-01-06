using VibrantApi.Operations;

namespace VibrantApi;

public interface IVibrantApiClient
{
    IPaymentIntentOperations PaymentIntents { get; }
    ITerminalsOperations Terminals { get; }
}
