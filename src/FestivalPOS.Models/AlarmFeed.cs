using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class AlarmFeed
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = default!;
        public string? SubscriberEmail { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<AlarmEvent>? Events { get; set; }
    }
}
