using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointOfSales(PosContext db, IMediator mediator) : ControllerBase
    {
        [HttpPost]
        public async Task<PointOfSale> Create(PointOfSale pos)
        {
            var number = 1;
            foreach (var staff in pos.ServingStaff)
            {
                staff.Number = number++;
            }

            db.PointOfSales.Add(pos);

            await db.SaveChangesAsync();

            return pos;
        }

        [HttpGet]
        public async Task<List<PointOfSale>> GetAll()
        {
            var poss = await db
                .PointOfSales.Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .OrderBy(x => x.Name)
                .ToListAsync();

            return poss;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PointOfSale>> GetById(int id)
        {
            var pos = await db
                .PointOfSales.Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            return pos;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<PointOfSale>> Update(
            int id,
            JsonPatchDocument<PointOfSale> patch
        )
        {
            var pos = await db
                .PointOfSales.Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            patch.ApplyTo(pos);

            var number = 1;
            foreach (var staff in pos.ServingStaff)
            {
                staff.Number = number++;
            }

            await db.SaveChangesAsync();
            await mediator.Publish(new PointOfSaleUpdatedNotification(pos.Id));

            return pos;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var pos = await db.PointOfSales.FirstOrDefaultAsync(x => x.Id == id);

            if (pos == null)
            {
                return NotFound();
            }

            pos.IsDeleted = true;
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}
