﻿using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class PointOfSale
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public int? ReceiptPrinterId { get; set; }
        [JsonIgnore]
        public Printer ReceiptPrinter { get; set; }
        public int? TicketPrinterId { get; set; }
        [JsonIgnore]
        public Printer TicketPrinter { get; set; }
        public int? ServingPrinterId { get; set; }
        [JsonIgnore]
        public Printer ServingPrinter { get; set; }
        public bool IsDeleted { get; set; }
    }
}