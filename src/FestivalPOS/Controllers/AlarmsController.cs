using FestivalPOS.Hubs;
using FestivalPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using SystemTextJsonPatch;

namespace FestivalPOS.Controllers;

[Route("api/Alarms")]
[ApiController]
public class AlarmsController(PosContext db, IHubContext<AlarmsHub> hub) : ControllerBase
{
    [HttpPost("Feeds")]
    public async Task<AlarmFeed> CreateFeed(AlarmFeed feed)
    {
        db.AlarmFeeds.Add(feed);
        await db.SaveChangesAsync();

        return feed;
    }

    [HttpGet("Feeds")]
    public Task<List<AlarmFeed>> GetAllFeeds()
    {
        return db.AlarmFeeds.ToListAsync();
    }

    [HttpGet("Feeds/{id:int}")]
    public async Task<ActionResult<AlarmFeed>> GetFeedById(int id)
    {
        var feed = await db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

        if (feed == null)
        {
            return NotFound();
        }

        return feed;
    }

    [HttpPatch("Feeds/{id:int}")]
    public async Task<ActionResult<AlarmFeed>> UpdateFeed(
        int id,
        JsonPatchDocument<AlarmFeed> patch
    )
    {
        var feed = await db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

        if (feed == null)
        {
            return NotFound();
        }

        patch.ApplyTo(feed);
        await db.SaveChangesAsync();

        return feed;
    }

    [HttpDelete("Feeds/{id:int}")]
    public async Task<ActionResult<AlarmFeed>> DeleteFeed(int id)
    {
        var feed = await db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

        if (feed == null)
        {
            return NotFound();
        }

        feed.IsDeleted = true;
        await db.SaveChangesAsync();

        return feed;
    }

    [HttpPost("Feeds/{alarmFeedId:int}/Events")]
    public async Task<ActionResult<AlarmEvent>> CreateEvent(int alarmFeedId, AlarmEvent @event)
    {
        var feed = await db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == alarmFeedId);

        if (feed == null)
        {
            return NotFound();
        }

        @event.AlarmFeedId = feed.Id;
        @event.Created = LocalClock.Now;

        db.AlarmEvents.Add(@event);
        await db.SaveChangesAsync();

        var created = await db
            .AlarmEvents.Include(x => x.AlarmFeed)
            .Include(x => x.Terminal)
            .Include(x => x.PointOfSale)
            .FirstAsync(x => x.Id == @event.Id);

        //feed.SubscriberEmails

        await hub.Clients.All.SendAsync("EventCreated", created);

        return created;
    }

    [HttpGet("Events/Pending")]
    public Task<List<AlarmEvent>> GetAllPendingAlarms(int? terminalId, int? pointOfSaleId)
    {
        var query = db
            .AlarmEvents.Include(x => x.AlarmFeed)
            .Include(x => x.Terminal)
            .Include(x => x.PointOfSale)
            .Where(x => x.Cancelled == null);

        if (terminalId != null)
        {
            query = query.Where(x => x.TerminalId == terminalId);
        }

        if (pointOfSaleId != null)
        {
            query = query.Where(x => x.PointOfSaleId == pointOfSaleId);
        }

        return query.OrderBy(x => x.Id).ToListAsync();
    }

    [HttpDelete("Events/{alarmEventId:int}")]
    public async Task<ActionResult<AlarmEvent>> CancelEvent(int alarmEventId)
    {
        var @event = await db.AlarmEvents.FirstOrDefaultAsync(x => x.Id == alarmEventId);

        if (@event == null)
        {
            return NotFound();
        }

        @event.Cancelled = LocalClock.Now;
        await db.SaveChangesAsync();

        var cancelled = await db
            .AlarmEvents.Include(x => x.AlarmFeed)
            .Include(x => x.Terminal)
            .Include(x => x.PointOfSale)
            .FirstAsync(x => x.Id == @event.Id);

        return cancelled;
    }
}
