using FestivalPOS.Models;
using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController(
    IMediator mediator,
    PosContext db,
    PrintDispatcher printDispatcher,
    ReceiptPrintGenerator receiptPrintGenerator,
    PrintQueue printQueue
) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<Order>> Create(Order order)
    {
        order.Total = order.Lines.Sum(x => x.Total);
        order.AmountDue = order.Total - order.Payments.Sum(x => x.Amount);
        order.Created = LocalClock.Now;

        var position = 0;
        foreach (var line in order.Lines)
        {
            line.Position = position++;
        }

        db.Orders.Add(order);

        await db.SaveChangesAsync();

        return order;
    }

    [HttpGet]
    public async Task<List<Order>> GetAll(int? terminalId, int? pointOfSaleId)
    {
        var orders = await db
            .Orders.Where(x => terminalId == null || x.TerminalId == terminalId)
            .Where(x => pointOfSaleId == null || x.PointOfSaleId == pointOfSaleId)
            .OrderByDescending(x => x.Created)
            .Take(10)
            .ToListAsync();

        return orders;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Order>> GetById(int id)
    {
        var order = await db
            .Orders.Include(x => x.Lines.OrderBy(l => l.Position))
            .Include(x => x.Payments)
            .Include(x => x.Servings)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return NotFound();
        }

        return order;
    }

    [HttpGet("/api/Tags/{tagNumber:int}/CurrentOrder")]
    public async Task<ActionResult<Order>> GetCurrentByTag(int tagNumber)
    {
        var order = await db
            .OrderTags.Where(x => x.Number == tagNumber && x.Detached == null)
            .Include(x => x.Order.Lines.OrderBy(l => l.Position))
            .Include(x => x.Order.Payments)
            .Include(x => x.Order.Servings)
            .Select(x => x.Order)
            .FirstOrDefaultAsync();

        if (order == null)
        {
            return NotFound();
        }

        return order;
    }

    [HttpPut("{id:int}/Tags/{tagNumber:int}")]
    public async Task<ActionResult> AssignTag(int id, int tagNumber, bool force)
    {
        var now = LocalClock.Now;
        var currentTags = await db
            .OrderTags.Where(x => x.Number == tagNumber && x.Detached == null)
            .ToListAsync();

        if (currentTags.Count > 0)
        {
            if (!force)
            {
                return Conflict();
            }
            else
            {
                foreach (var tag in currentTags)
                {
                    tag.Detached = now;
                }
            }
        }

        db.OrderTags.Add(
            new OrderTag()
            {
                Number = tagNumber,
                OrderId = id,
                Attached = now,
            }
        );

        await db.SaveChangesAsync();

        var notifications = new List<INotification>(1 + currentTags.Count)
        {
            new OrderTagAssignedNotification(id, tagNumber),
        };

        foreach (var tag in currentTags)
        {
            notifications.Add(new OrderTagUnassignedNotification(tag.OrderId, tag.Number));
        }

        await Task.WhenAll(notifications.Select(x => mediator.Publish(x)));

        return NoContent();
    }

    [HttpDelete("{id:int}/Tags/{tagNumber:int}")]
    public async Task<ActionResult> UnassignTag(int id, int tagNumber)
    {
        var tag = await db.OrderTags.FirstOrDefaultAsync(x =>
            x.Number == tagNumber && x.OrderId == id && x.Detached == null
        );

        if (tag != null)
        {
            tag.Detached = LocalClock.Now;
            await db.SaveChangesAsync();

            await mediator.Publish(new OrderTagUnassignedNotification(id, tag.Number));
        }

        return NoContent();
    }

    [HttpPost("{id:int}/Receipt")]
    public async Task<ActionResult> Receipt(int id, int? pointOfSaleId)
    {
        var order = await db.Orders.Include(x => x.Lines).FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return NotFound();
        }

        var printerId = await printDispatcher.GetReceiptPrinterAsync(
            pointOfSaleId ?? order.PointOfSaleId
        );

        if (printerId == null)
        {
            return BadRequest();
        }

        var data = receiptPrintGenerator.Generate(order);
        await printQueue.EnqueueAsync(
            new PrintJob()
            {
                PrinterId = printerId.Value,
                Name = $"Kvittering {order.Id}",
                Data = data
            }
        );
        await mediator.Publish(new PrintJobCreatedNotification(printerId.Value));

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        var order = await db
            .Orders.Include(x => x.Payments)
            .Include(x => x.Servings)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return NotFound();
        }

        order.IsDeleted = true;
        await db.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete]
    public async Task<ActionResult> Delete(
        DateTimeOffset notBefore,
        CancellationToken cancellationToken
    )
    {
        await db
            .Orders.Where(x => x.Created >= notBefore)
            .ExecuteUpdateAsync(u => u.SetProperty(x => x.IsDeleted, true), cancellationToken);

        return NoContent();
    }
}
