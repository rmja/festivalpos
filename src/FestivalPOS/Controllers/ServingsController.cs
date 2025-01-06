using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SystemTextJsonPatch;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ServingsController(IMediator mediator, PosContext db) : ControllerBase
{
    [HttpPost("/api/Orders/{orderId:int}/Servings")]
    public async Task<ActionResult<Serving>> Create(int orderId, Serving serving)
    {
        var order = await db.Orders.Include(x => x.Lines).FirstOrDefaultAsync(x => x.Id == orderId);

        if (order == null)
        {
            return NotFound();
        }

        var newestTag = await db
            .OrderTags.OrderByDescending(x => x.Attached)
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
                orderLine.Receiveable = Math.Max(orderLine.Receiveable - servingLine.Quantity, 0);
            }
            else
            {
                return BadRequest();
            }
        }

        db.Servings.Add(serving);

        await db.SaveChangesAsync();

        await mediator.Publish(new ServingCreatedNotification(serving.Id));

        return serving;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Serving>> GetById(int id)
    {
        var serving = await db
            .Servings.Include(x => x.Lines.OrderBy(l => l.Position))
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
        var serving = await db.Servings.FirstOrDefaultAsync(x => x.Id == id);

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

        await db.SaveChangesAsync();

        await mediator.Publish(new ServingUpdatedNotification(serving.Id));

        return serving;
    }

    [HttpGet("/api/PointsOfSale/{pointOfSaleId:int}/Servings")]
    public async Task<List<Serving>> GetAllActiveByPointOfSaleId(int pointOfSaleId)
    {
        var completedThreshold = LocalClock.Now.AddSeconds(-60);

        var servings = await db
            .Servings.Include(x => x.Lines.OrderBy(l => l.Position))
            .Where(x => x.PointOfSaleId == pointOfSaleId)
            .Where(x => !x.Order.IsDeleted)
            .Where(x =>
                x.State == ServingState.Pending
                || x.State == ServingState.Ongoing
                || x.Completed >= completedThreshold
            )
            .OrderBy(x => x.Created)
            .ToListAsync();

        return servings;
    }
}
