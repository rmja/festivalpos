using System.Text.Json.Serialization;

namespace VibrantApi.Models;

public record Terminal
{
    public required string Id { get; init; }
    public required string AccountId { get; init; }
    public required string Name { get; set; }
    public string? Descriptor { get; set; }
    public string Mode { get; set; } = "pos"; // pos or terminal
    public bool Virtual { get; set; }
}
