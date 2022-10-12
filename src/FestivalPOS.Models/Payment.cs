using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FestivalPOS.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        [JsonIgnore]
        public Order? Order { get; set; }
        public PaymentMethod Method { get; set; }
        public decimal Amount { get; set; }
        [MaxLength(20)]
        public string? TransactionNumber { get; set; }
        public int? AccountId { get; set; }
        [JsonIgnore]
        public Account? Account { get; set; }
        public DateTimeOffset Created { get; set; }
    }

    public enum PaymentMethod
    {
        Card = 1,
        Cash = 2,
        Account = 3,
        Offset = 4,
        Deposit = 5,
        MobilePay = 6,
    }
}
