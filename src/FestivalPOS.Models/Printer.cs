using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models;

public class Printer
{
    public int Id { get; set; }

    [MaxLength(100)]
    public required string Name { get; set; }
    public int TerminalId { get; set; }
    public Terminal? Terminal { get; set; }

    [MaxLength(50)]
    public string? RestPrintPrinterName { get; set; }

    [MaxLength(50)]
    public string? BluetoothMacAddress { get; set; }
}
