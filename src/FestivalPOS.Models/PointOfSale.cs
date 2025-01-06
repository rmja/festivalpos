using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class PointOfSale
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public required string Name { get; set; }
        public int? ReceiptPrinterId { get; set; }

        [JsonIgnore]
        public Printer? ReceiptPrinter { get; set; }
        public bool IsDeleted { get; set; }

        public List<ServingStaff> ServingStaff { get; set; } = [];
    }
}
