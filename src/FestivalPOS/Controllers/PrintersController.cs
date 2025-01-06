using FestivalPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SystemTextJsonPatch;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PrintersController(PosContext db) : ControllerBase
{
    [HttpPost]
    public async Task<Printer> Create(Printer printer)
    {
        db.Printers.Add(printer);

        await db.SaveChangesAsync();

        return printer;
    }

    [HttpGet]
    public Task<List<Printer>> GetAll()
    {
        return db.Printers.OrderBy(x => x.Name).ToListAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Printer>> GetById(int id)
    {
        var printer = await db.Printers.FirstOrDefaultAsync(x => x.Id == id);

        if (printer == null)
        {
            return NotFound();
        }

        return printer;
    }

    [HttpPatch("{id:int}")]
    public async Task<ActionResult<Printer>> Update(int id, JsonPatchDocument<Printer> patch)
    {
        var printer = await db.Printers.FirstOrDefaultAsync(x => x.Id == id);

        if (printer == null)
        {
            return NotFound();
        }

        patch.ApplyTo(printer);
        await db.SaveChangesAsync();

        return printer;
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        var printer = await db.Printers.FirstOrDefaultAsync(x => x.Id == id);

        if (printer == null)
        {
            return NotFound();
        }

        var pointsOfSale = await db
            .PointOfSales.Where(x => x.ReceiptPrinterId == printer.Id)
            .ToListAsync();

        foreach (var pos in pointsOfSale)
        {
            pos.ReceiptPrinterId = null;
        }

        db.Printers.Remove(printer);
        await db.SaveChangesAsync();

        return NoContent();
    }
}
