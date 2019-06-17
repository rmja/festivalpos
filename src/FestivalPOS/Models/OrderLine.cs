using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class OrderLine
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        [JsonIgnore]
        public Order Order { get; set; }
        public int Position { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Note { get; set; }
        public int Quantity { get; set; }
        public decimal Total { get; set; }
        public int? ProductId { get; set; }
        public int Receiveable { get; set; }
        public bool IsServing { get; set; }
        [JsonIgnore]
        public Product Product { get; set; }
    }
}
