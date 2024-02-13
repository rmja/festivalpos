using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class VibrantAccount
    {
        public required string Id { get; set; }
        public required string Name { get; set; }
        public bool Sandbox { get; set; }
        public required string ApiKey { get; set; }
    }
}
