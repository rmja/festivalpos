namespace FestivalPOS.VibrantApi
{
    public record class ProcessPaymentIntentResponse
    {
        public required string ObjectIdToProcess { get; set; }
    }
}
