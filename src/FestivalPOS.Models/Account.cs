using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models;

public class Account
{
    public int Id { get; set; }
    public int Number { get; set; }

    [MaxLength(100)]
    public required string Name { get; set; }
    public decimal MaxCredit { get; set; }
    public decimal RemainingCredit { get; set; }
    public bool HighPriorityServing { get; set; }
    public bool IsDeleted { get; set; }
    public ICollection<Payment> Payments { get; set; } = [];
}
