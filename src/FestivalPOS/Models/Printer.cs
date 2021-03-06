﻿using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class Printer
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public int TerminalId { get; set; }
        public Terminal Terminal { get; set; }
        [MaxLength(50)]
        public string RestPrintPrinterName { get; set; }
        [MaxLength(50)]
        public string BluetoothMacAddress { get; set; }
    }
}
