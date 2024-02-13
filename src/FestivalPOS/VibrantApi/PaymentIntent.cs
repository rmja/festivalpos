using System.Text.Json.Serialization;

namespace FestivalPOS.VibrantApi
{
    public record class PaymentIntent
    {
        public string TerminalId { get; set; }
        public int Amount { get; init; }
        public string Description { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? Status { get; set; } // E.g. requires_payment_method

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? CancelationReason { get; set; }
    }
}
