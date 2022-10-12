using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int Number { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = default!;
        public decimal MaxCredit { get; set; }
        public decimal RemainingCredit { get; set; }
        public bool HighPriorityServing { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Payment> Payments { get; set; } = new List<Payment>();
    }
}
