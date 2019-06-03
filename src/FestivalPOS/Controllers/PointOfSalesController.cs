using FestivalPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointOfSales : ControllerBase
    {
        private readonly PosContext _db;

        public PointOfSales(PosContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<PointOfSale> Create(PointOfSale pos)
        {
            _db.PointOfSales.Add(pos);

            await _db.SaveChangesAsync();

            return pos;
        }

        [HttpGet]
        public Task<List<PointOfSale>> GetAll()
        {
            return _db.PointOfSales.OrderBy(x => x.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PointOfSale>> GetById(int id)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            return pos;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<PointOfSale>> Update(int id, JsonPatchDocument<PointOfSale> patch)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            patch.ApplyTo(pos);
            await _db.SaveChangesAsync();

            return pos;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var pos = await _db.PointOfSales.FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            pos.IsDeleted = true;
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
