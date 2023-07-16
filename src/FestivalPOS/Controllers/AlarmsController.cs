using FestivalPOS.Hubs;
using FestivalPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/Alarms")]
    [ApiController]
    public class AlarmsController : ControllerBase
    {
        private readonly PosContext _db;
        private readonly IHubContext<AlarmsHub> _hub;

        public AlarmsController(PosContext db, IHubContext<AlarmsHub> hub)
        {
            _db = db;
            _hub = hub;
        }

        [HttpPost("Feeds")]
        public async Task<AlarmFeed> CreateFeed(AlarmFeed feed)
        {
            _db.AlarmFeeds.Add(feed);
            await _db.SaveChangesAsync();

            return feed;
        }

        [HttpGet("Feeds")]
        public Task<List<AlarmFeed>> GetAllFeeds()
        {
            return _db.AlarmFeeds.ToListAsync();
        }

        [HttpGet("Feeds/{id:int}")]
        public async Task<ActionResult<AlarmFeed>> GetFeedById(int id)
        {
            var feed = await _db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

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
            var feed = await _db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

            if (feed == null)
            {
                return NotFound();
            }

            patch.ApplyTo(feed);
            await _db.SaveChangesAsync();

            return feed;
        }

        [HttpDelete("Feeds/{id:int}")]
        public async Task<ActionResult<AlarmFeed>> DeleteFeed(int id)
        {
            var feed = await _db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == id);

            if (feed == null)
            {
                return NotFound();
            }

            feed.IsDeleted = true;
            await _db.SaveChangesAsync();

            return feed;
        }

        [HttpPost("Feeds/{alarmFeedId:int}/Events")]
        public async Task<ActionResult<AlarmEvent>> CreateEvent(int alarmFeedId, AlarmEvent @event)
        {
            var feed = await _db.AlarmFeeds.FirstOrDefaultAsync(x => x.Id == alarmFeedId);

            if (feed == null)
            {
                return NotFound();
            }

            @event.AlarmFeedId = feed.Id;
            @event.Created = LocalClock.Now;

            _db.AlarmEvents.Add(@event);
            await _db.SaveChangesAsync();

            @event = await _db.AlarmEvents
                .Include(x => x.AlarmFeed)
                .Include(x => x.Terminal)
                .Include(x => x.PointOfSale)
                .FirstOrDefaultAsync(x => x.Id == @event.Id);

            //feed.SubscriberEmails

            await _hub.Clients.All.SendAsync("EventCreated", @event);

            return @event;
        }

        [HttpGet("Events/Pending")]
        public Task<List<AlarmEvent>> GetAllPendingAlarms(int? terminalId, int? pointOfSaleId)
        {
            var query = _db.AlarmEvents
                .Include(x => x.AlarmFeed)
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
            var @event = await _db.AlarmEvents.FirstOrDefaultAsync(x => x.Id == alarmEventId);

            if (@event == null)
            {
                return NotFound();
            }

            @event.Cancelled = LocalClock.Now;
            await _db.SaveChangesAsync();

            @event = await _db.AlarmEvents
                .Include(x => x.AlarmFeed)
                .Include(x => x.Terminal)
                .Include(x => x.PointOfSale)
                .FirstOrDefaultAsync(x => x.Id == @event.Id);

            return @event;
        }
    }
}
