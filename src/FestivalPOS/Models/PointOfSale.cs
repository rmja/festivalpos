using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class PointOfSale
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public int? ReceiptPrinterId { get; set; }
        [JsonIgnore]
        public Printer ReceiptPrinter { get; set; }
        public int NoOfServingStaff { get; set; }
        public bool IsDeleted { get; set; }
    }
}
