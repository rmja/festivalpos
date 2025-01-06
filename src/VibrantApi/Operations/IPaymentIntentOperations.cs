using Refit;
using VibrantApi.Models;

namespace VibrantApi.Operations;

public interface IPaymentIntentOperations
{
    // https://pos.api.vibrant.app/docs#/payment_intents/PaymentIntentController_getPaymentIntent
    [Get("/pos/v1/payment_intents/{paymentIntentId}")]
    Task<PaymentIntent> GetByIdAsync(
        string paymentIntentId,
        CancellationToken cancellationToken = default
    );
}
