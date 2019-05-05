using KajfestPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace KajfestPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly PosContext _db;

        public OrdersController(PosContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> Create(Order order)
        {
            order.Total = order.Lines.Sum(x => x.Total);
            order.AmountDue = order.Total - order.Payments.Sum(x => x.Amount);
            order.Created = LocalClock.Now;

            _db.Orders.Add(order);

            await _db.SaveChangesAsync();

            return order;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Order>> GetById(int id)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .Include(x => x.Payments)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var order = await _db.Orders.FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            _db.Orders.Remove(order);

            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
