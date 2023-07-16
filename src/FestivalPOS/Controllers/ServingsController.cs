using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
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
    public class ServingsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;

        public ServingsController(IMediator mediator, PosContext db)
        {
            _mediator = mediator;
            _db = db;
        }

        [HttpPost("/api/Orders/{orderId:int}/Servings")]
        public async Task<ActionResult<Serving>> Create(int orderId, Serving serving)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .FirstOrDefaultAsync(x => x.Id == orderId);

            if (order == null)
            {
                return NotFound();
            }

            var newestTag = await _db.OrderTags
                .OrderByDescending(x => x.Attached)
                .FirstOrDefaultAsync(x => x.OrderId == order.Id && x.Detached == null);

            serving.OrderId = orderId;
            serving.State = ServingState.Pending;
            serving.TagNumber = newestTag?.Number;
            serving.Created = LocalClock.Now;

            var orderLinesById = order.Lines.ToDictionary(x => x.Id, x => x);

            var position = 0;
            foreach (var servingLine in serving.Lines)
            {
                if (orderLinesById.TryGetValue(servingLine.OrderLineId, out var orderLine))
                {
                    servingLine.Position = position++;
                    servingLine.Name = orderLine.Name;

                    // Adjust receivable on order line
                    orderLine.Receiveable = Math.Max(
                        orderLine.Receiveable - servingLine.Quantity,
                        0
                    );
                }
                else
                {
                    return BadRequest();
                }
            }

            _db.Servings.Add(serving);

            await _db.SaveChangesAsync();

            await _mediator.Publish(new ServingCreatedNotification(serving.Id));

            return serving;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Serving>> GetById(int id)
        {
            var serving = await _db.Servings
                .Include(x => x.Lines.OrderBy(l => l.Position))
                .FirstOrDefaultAsync(x => x.Id == id);

            if (serving == null)
            {
                return NotFound();
            }

            return Ok(serving);
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Serving>> Update(int id, JsonPatchDocument<Serving> patch)
        {
            var serving = await _db.Servings.FirstOrDefaultAsync(x => x.Id == id);

            if (serving == null)
            {
                return NotFound();
            }

            patch.ApplyTo(serving);

            if (serving.State == ServingState.Ongoing && serving.Accepted == null)
            {
                serving.Accepted = LocalClock.Now;
            }

            if (serving.State == ServingState.Completed && serving.Completed == null)
            {
                serving.Completed = LocalClock.Now;
            }

            await _db.SaveChangesAsync();

            await _mediator.Publish(new ServingUpdatedNotification(serving.Id));

            return serving;
        }

        [HttpGet("/api/PointsOfSale/{pointOfSaleId:int}/Servings")]
        public async Task<List<Serving>> GetAllActiveByPointOfSaleId(int pointOfSaleId)
        {
            var completedThreshold = LocalClock.Now.AddSeconds(-60);

            var servings = await _db.Servings
                .Include(x => x.Lines.OrderBy(l => l.Position))
                .Where(x => x.PointOfSaleId == pointOfSaleId)
                .Where(
                    x =>
                        x.State == ServingState.Pending
                        || x.State == ServingState.Ongoing
                        || x.Completed >= completedThreshold
                )
                .OrderBy(x => x.Created)
                .ToListAsync();

            return servings;
        }
    }
}
