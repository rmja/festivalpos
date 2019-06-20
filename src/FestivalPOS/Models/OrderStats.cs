using NodaTime.Extensions;
using System;
using System.Collections.Generic;

namespace FestivalPOS.Models
{
    public class OrderStats
    {
        private DateTimeOffset? _periodStart;

        public StatsKind Kind { get; set; }
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        public DateTimeOffset PeriodStart
        {
            get => _periodStart ?? EarliestOrderCreated.StartOf(Kind);
            set => _periodStart = value;
        }
        public int OrderCount { get; set; }
        public decimal Total { get; set; }
        public List<PaymentStats> Payments { get; set; }
        public List<ProductStats> Products { get; set; }
    }

    public enum StatsKind
    {
        Yearly = 1,
        Monthly = 2,
        Daily = 3,
        Hourly = 4
    }

    public static class DateTimeOffsetExtensions
    {
        public static DateTimeOffset StartOf(this DateTimeOffset origin, StatsKind kind)
        {
            var zonedOrigin = origin.ToZonedDateTime().WithZone(LocalClock.TimeZone);

            switch (kind)
            {
                case StatsKind.Yearly: return zonedOrigin
                    .LocalDateTime.Date.AtMidnight()
                    .PlusDays(-(zonedOrigin.DayOfYear - 1))
                    .InZoneLeniently(LocalClock.TimeZone)
                    .ToDateTimeOffset();
                case StatsKind.Monthly: return zonedOrigin
                    .LocalDateTime.Date.AtMidnight()
                    .PlusDays(-(zonedOrigin.Day - 1))
                    .InZoneLeniently(LocalClock.TimeZone)
                    .ToDateTimeOffset();
                case StatsKind.Daily: return zonedOrigin
                    .LocalDateTime.Date.AtMidnight()
                    .InZoneLeniently(LocalClock.TimeZone)
                    .ToDateTimeOffset();
                case StatsKind.Hourly: return zonedOrigin
                    .PlusTicks(-(zonedOrigin.TickOfDay % TimeSpan.TicksPerHour))
                    .ToDateTimeOffset();
            }

            throw new ArgumentException();
        }
    }

    public class PaymentStats
    {
        internal StatsKind Kind { get; set; }
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestOrderCreated.StartOf(Kind);
        public PaymentMethod Method { get; set; }
        public int Payments { get; set; }
        public decimal Total { get; set; }
    }

    public class ProductStats
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int OrderCount { get; set; }
        public int SaleQuantity { get; set; }
        public decimal SaleTotal { get; set; }
        public int ServingCount { get; set; }
        public int ServingQuantity { get; set; }
    }
}
