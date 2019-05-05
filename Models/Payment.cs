using Newtonsoft.Json;
using System;

namespace KajfestPOS.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        [JsonIgnore]
        public Order Order { get; set; }
        public PaymentMethod Method { get; set; }
        public decimal Amount { get; set; }
        public int? AccountId { get; set; }
        [JsonIgnore]
        public Account Account { get; set; }
        public DateTimeOffset Created { get; set; }
    }

    public enum PaymentMethod
    {
        Card = 1,
        Cash = 2,
        Account = 3
    }
}
