namespace VibrantApi.Models;

public record PaymentIntent
{
    public int Amount { get; init; }
    public required string Description { get; set; }
    public Dictionary<string, string> Metadata { get; set; } = [];
    public required string Status { get; set; } // E.g. requires_payment_method, processing, succeedeed or canceled
    public string CancelationReason { get; set; } = "";
}
