using System.ComponentModel.DataAnnotations;

namespace KajfestPOS.Models
{
    public class Terminal
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
    }
}
