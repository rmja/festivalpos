using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
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
        private readonly IMediator _mediator;

        public PointOfSales(PosContext db, IMediator mediator)
        {
            _db = db;
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<PointOfSale> Create(PointOfSale pos)
        {
            var number = 1;
            foreach (var staff in pos.ServingStaff)
            {
                staff.Number = number++;
            }

            _db.PointOfSales.Add(pos);

            await _db.SaveChangesAsync();

            return pos;
        }

        [HttpGet]
        public async Task<List<PointOfSale>> GetAll()
        {
            var poss = await _db.PointOfSales
                .Include(x => x.ServingStaff.OrderBy(s => s.Number))
                .OrderBy(x => x.Name)
                .ToListAsync();

            return poss;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PointOfSale>> GetById(int id)
        {
            var pos = await _db.PointOfSales
                .Include(x => x.ServingStaff.OrderBy(s => s.Number))
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
            var pos = await _db.PointOfSales
                .Include(x => x.ServingStaff.OrderBy(s => s.Number))
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

            await _db.SaveChangesAsync();
            await _mediator.Publish(new PointOfSaleUpdatedNotification(pos.Id));

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
