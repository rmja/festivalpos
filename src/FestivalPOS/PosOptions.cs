namespace FestivalPOS;

public class PosOptions
{
    public required string SqlServerConnectionString { get; set; }
    public required string RedisConnectionString { get; set; }
    public required string StorageConnectionString { get; set; }
}
