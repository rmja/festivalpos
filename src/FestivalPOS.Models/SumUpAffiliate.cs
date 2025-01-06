using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class SumUpAffiliate
    {
        [MaxLength(100)]
        public required string Key { get; set; }

        [MaxLength(100)]
        public string? Name { get; set; }
    }
}
