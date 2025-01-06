using System.Text.Json.Serialization;

namespace VibrantApi;

public class PagedList<T>
{
    [JsonPropertyName("has_more")]
    public bool HasMore { get; init; }

    [JsonPropertyName("total")]
    public int Total { get; init; }

    [JsonPropertyName("data")]
    public required T[] Data { get; init; }
}
