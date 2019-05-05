using System;
using System.Collections.Generic;

namespace KajfestPOS.Models
{
    public class OrderStats
    {
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        public DateTimeOffset PeriodStart => EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
        public int Orders { get; set; }
        public decimal Total { get; set; }
        public List<PaymentStats> Payments { get; set; }
        public List<ProductStats> Products { get; set; }
    }

    public class PaymentStats
    {
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
        public PaymentMethod Method { get; set; }
        public int Payments { get; set; }
        public decimal Total { get; set; }
    }

    public class ProductStats
    {
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Orders { get; set; }
        public int Quantity { get; set; }
        public decimal Total { get; set; }
    }
}
