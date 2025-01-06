using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models;

public class AlarmEvent
{
    public int Id { get; set; }
    public int AlarmFeedId { get; set; }

    [JsonIgnore]
    public AlarmFeed? AlarmFeed { get; set; }

    [NotMapped]
    public string? AlarmFeedName => AlarmFeed?.Name;

    public required int TerminalId { get; set; }

    [NotMapped]
    public string? TerminalName => Terminal?.Name;

    [JsonIgnore]
    public Terminal? Terminal { get; set; }

    public required int PointOfSaleId { get; set; }

    [JsonIgnore]
    public PointOfSale? PointOfSale { get; set; }

    [NotMapped]
    public string? PointOfSaleName => PointOfSale?.Name;
    public DateTimeOffset? Cancelled { get; set; }
    public DateTimeOffset Created { get; set; }
}
