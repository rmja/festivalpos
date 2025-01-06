namespace VibrantApi.Models;

public record ProcessPaymentIntent
{
    public required string TerminalId { get; set; }
    public required string ObjectIdToProcess { get; set; }
}
