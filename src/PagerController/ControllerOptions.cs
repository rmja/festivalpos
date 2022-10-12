namespace PagerController
{
    internal class ControllerOptions
    {
        public string ServingHub { get; set; } = "https://localhost:5001/Serving";
        public string SerialPort { get; set; } = "COM1";
        public int RestaurantId { get; set; } = 15;
        public int PointOfSaleId { get; set; }
    }
}
