using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class PointOfSale
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = default!;
        public int? ReceiptPrinterId { get; set; }

        [JsonIgnore]
        public Printer? ReceiptPrinter { get; set; }
        public bool IsDeleted { get; set; }

        public List<ServingStaff> ServingStaff { get; set; } = new List<ServingStaff>();
    }
}
