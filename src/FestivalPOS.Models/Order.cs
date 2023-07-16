using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int TerminalId { get; set; }

        [JsonIgnore]
        public Terminal? Terminal { get; set; }
        public int PointOfSaleId { get; set; }

        [JsonIgnore]
        public PointOfSale? PointOfSale { get; set; }
        public decimal Total { get; set; }
        public decimal AmountDue { get; set; }
        public List<OrderLine> Lines { get; set; } = new List<OrderLine>();
        public IList<Payment> Payments { get; set; } = new List<Payment>();
        public IList<OrderTag>? Tags { get; set; }
        public IList<Serving> Servings { get; set; } = new List<Serving>();
        public bool IsDeleted { get; set; }
        public DateTimeOffset Created { get; set; }
    }
}
