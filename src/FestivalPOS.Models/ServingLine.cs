using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class ServingLine
    {
        public int Id { get; set; }
        public int ServingId { get; set; }

        [JsonIgnore]
        public Serving? Serving { get; set; }
        public int OrderLineId { get; set; }

        [JsonIgnore]
        public OrderLine? OrderLine { get; set; }
        public int Position { get; set; }
        public int Quantity { get; set; }

        [MaxLength(100)]
        public string? Name { get; set; }
    }
}
