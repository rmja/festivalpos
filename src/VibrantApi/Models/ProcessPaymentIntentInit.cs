namespace VibrantApi.Models;

public record ProcessPaymentIntentInit
{
    public required PaymentIntentInit PaymentIntent { get; init; }
}
