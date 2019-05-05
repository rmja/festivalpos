using System;

namespace KajfestPOS
{
    public static class LocalClock
    {
        private static readonly TimeZoneInfo Timezone = TimeZoneInfo.FindSystemTimeZoneById("Romance Standard Time");
        public static DateTimeOffset Now => TimeZoneInfo.ConvertTime(DateTimeOffset.UtcNow, Timezone);
    }
}
