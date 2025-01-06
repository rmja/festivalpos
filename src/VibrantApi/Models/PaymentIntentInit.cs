namespace VibrantApi.Models;

public record PaymentIntentInit
{
    public int Amount { get; set; }
    public required string Description { get; set; }
    public Dictionary<string, string> Metadata { get; set; } = [];
}
