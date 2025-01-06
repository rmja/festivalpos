using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models;

public class Terminal
{
    public int Id { get; set; }

    [MaxLength(100)]
    public required string Name { get; set; }
    public bool IsDeleted { get; set; }
    public ICollection<Printer> Printers { get; set; } = [];
}
