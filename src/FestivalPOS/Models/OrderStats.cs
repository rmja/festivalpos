using System;
using System.Collections.Generic;

namespace FestivalPOS.Models
{
    public class OrderStats
    {
        private DateTimeOffset _earliestOrderCreated;
        internal DateTimeOffset EarliestOrderCreated
        {
            get => _earliestOrderCreated;
            set
            {
                _earliestOrderCreated = value;
                PeriodStart = EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
            }
        }
        public DateTimeOffset PeriodStart { get; set; }
        public int OrderCount { get; set; }
        public decimal Total { get; set; }
        public List<PaymentStats> Payments { get; set; }
        public List<ProductSaleStats> ProductSales { get; set; }
        public List<ProductServingStats> ProductServings { get; set; }
    }

    public class PaymentStats
    {
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
        public PaymentMethod Method { get; set; }
        public int Payments { get; set; }
        public decimal Total { get; set; }
    }

    public class ProductSaleStats
    {
        internal DateTimeOffset EarliestOrderCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestOrderCreated.AddTicks(-(EarliestOrderCreated.Ticks % TimeSpan.TicksPerHour));
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductQuantity { get; set; }
        public int OrderCount { get; set; }
        public decimal Total { get; set; }
    }

    public class ProductServingStats
    {
        internal DateTimeOffset EarliestServingCreated { get; set; }
        internal DateTimeOffset PeriodStart => EarliestServingCreated.AddTicks(-(EarliestServingCreated.Ticks % TimeSpan.TicksPerHour));
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductQuantity { get; set; }
        public int ServingCount { get; set; }
    }
}
