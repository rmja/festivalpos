using System.Text.Json.Serialization;

namespace FestivalPOS.VibrantApi
{
    public record class Terminal
    {
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? Id { get; init; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? AccountId { get; init; }
        public required string Name { get; set; }
        public string? Descriptor { get; set; }
        public string Mode { get; set; } = "terminal";
        public bool Virtual { get; set; }
    }
}
