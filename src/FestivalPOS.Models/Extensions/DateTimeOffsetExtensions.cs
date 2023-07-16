using FestivalPOS.Models;
using NodaTime.Extensions;
using System;

namespace FestivalPOS
{
    public static class DateTimeOffsetExtensions
    {
        public static DateTimeOffset StartOf(this DateTimeOffset origin, StatsKind kind)
        {
            var zonedOrigin = origin.ToZonedDateTime().WithZone(LocalClock.TimeZone);

            switch (kind)
            {
                case StatsKind.Yearly:
                    return zonedOrigin.LocalDateTime.Date
                        .AtMidnight()
                        .PlusDays(-(zonedOrigin.DayOfYear - 1))
                        .InZoneLeniently(LocalClock.TimeZone)
                        .ToDateTimeOffset();
                case StatsKind.Monthly:
                    return zonedOrigin.LocalDateTime.Date
                        .AtMidnight()
                        .PlusDays(-(zonedOrigin.Day - 1))
                        .InZoneLeniently(LocalClock.TimeZone)
                        .ToDateTimeOffset();
                case StatsKind.Daily:
                    return zonedOrigin.LocalDateTime.Date
                        .AtMidnight()
                        .InZoneLeniently(LocalClock.TimeZone)
                        .ToDateTimeOffset();
                case StatsKind.Hourly:
                    return zonedOrigin
                        .PlusTicks(-(zonedOrigin.TickOfDay % TimeSpan.TicksPerHour))
                        .ToDateTimeOffset();
            }

            throw new ArgumentException();
        }
    }
}
