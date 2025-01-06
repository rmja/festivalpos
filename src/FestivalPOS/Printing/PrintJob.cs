namespace FestivalPOS.Printing
{
    public class PrintJob
    {
        public int PrinterId { get; set; }
        public required string Name { get; set; }
        public required byte[] Data { get; set; }
    }
}
