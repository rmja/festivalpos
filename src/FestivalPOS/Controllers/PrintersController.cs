using FestivalPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrintersController : ControllerBase
    {
        private readonly PosContext _db;

        public PrintersController(PosContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<Printer> Create(Printer printer)
        {
            _db.Printers.Add(printer);

            await _db.SaveChangesAsync();

            return printer;
        }

        [HttpGet]
        public Task<List<Printer>> GetAll()
        {
            return _db.Printers.OrderBy(x => x.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Printer>> GetById(int id)
        {
            var printer = await _db.Printers.FirstOrDefaultAsync(x => x.Id == id);

            if (printer == null)
            {
                return NotFound();
            }

            return printer;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Printer>> Update(int id, JsonPatchDocument<Printer> patch)
        {
            var printer = await _db.Printers.FirstOrDefaultAsync(x => x.Id == id);

            if (printer == null)
            {
                return NotFound();
            }

            patch.ApplyTo(printer);
            await _db.SaveChangesAsync();

            return printer;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var printer = await _db.Printers.FirstOrDefaultAsync(x => x.Id == id);

            if (printer == null)
            {
                return NotFound();
            }

            var pointsOfSale = await _db.PointOfSales.Where(x => x.ReceiptPrinterId == printer.Id).ToListAsync();

            foreach (var pos in pointsOfSale)
            {
                pos.OnMaterialized();
                pos.ReceiptPrinterId = null;
            }

            _db.Printers.Remove(printer);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
