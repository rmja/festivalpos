using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class SumUpAffiliate
    {
        [Required]
        [MaxLength(100)]
        public string Key { get; set; } = default!;
        [MaxLength(100)]
        public string? Name { get; set; }
    }
}
