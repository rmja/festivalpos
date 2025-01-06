using NodaTime;

namespace FestivalPOS;

public static class LocalClock
{
    private static readonly TimeZoneInfo _timezone =
        TryGetTimezone("Romance Standard Time")
        ?? TryGetTimezone("Europe/Copenhagen")
        ?? throw new TimeZoneNotFoundException("Unable to get timezone");

    public static DateTimeOffset Now => TimeZoneInfo.ConvertTime(DateTimeOffset.UtcNow, _timezone);

    public static DateTimeZone TimeZone { get; } =
        DateTimeZoneProviders.Tzdb.GetZoneOrNull("Europe/Copenhagen")
        ?? throw new TimeZoneNotFoundException("Unable to get timezone");

    private static TimeZoneInfo? TryGetTimezone(string id)
    {
        try
        {
            return TimeZoneInfo.FindSystemTimeZoneById(id);
        }
        catch
        {
            return null;
        }
    }
}
