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
        public string PreviewImageName { get; set; }
        public string PreviewImageUrl => PreviewImageName != null ? $"/api/Products/{Id}/Image?kind=preview" : null;
        [MaxLength(300)]
        public string ThumbnailImageName { get; set; }
        public string ThumbnailImageUrl => ThumbnailImageName != null ? $"/api/Products/{Id}/Image?kind=thumbnail" : null;
        public bool IsDeleted { get; set; }
    }
}
