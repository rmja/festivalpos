using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public decimal Price { get; set; }
        [MaxLength(300)]
        public string PreviewImageUrl { get; set; }
        [MaxLength(300)]
        public string ThumbnailImageUrl { get; set; }
        public bool IsServing { get; set; }
        public bool IsDeleted { get; set; }
    }
}
