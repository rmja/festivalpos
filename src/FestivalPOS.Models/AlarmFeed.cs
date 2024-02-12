using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class AlarmFeed
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Name { get; set; }
        public string? SubscriberEmail { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<AlarmEvent>? Events { get; set; }
    }
}
