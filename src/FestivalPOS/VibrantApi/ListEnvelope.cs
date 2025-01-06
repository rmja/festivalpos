namespace FestivalPOS.VibrantApi
{
    public class ListEnvelope<T>
    {
        public required T[] Data { get; set; }
    }
}
