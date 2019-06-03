using FestivalPOS.Models;
using FestivalPOS.Notifications;
using FestivalPOS.Printing;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly PosContext _db;
        private readonly PrintDispatcher _printDispatcher;
        private readonly ReceiptPrintGenerator _receiptPrintGenerator;
        private readonly ServingPrintGenerator _servingPrintGenerator;
        private readonly PrintQueue _printQueue;

        public OrdersController(IMediator mediator, PosContext db, PrintDispatcher printDispatcher, ReceiptPrintGenerator receiptPrintGenerator, ServingPrintGenerator servingPrintGenerator, PrintQueue printQueue)
        {
            _mediator = mediator;
            _db = db;
            _printDispatcher = printDispatcher;
            _receiptPrintGenerator = receiptPrintGenerator;
            _servingPrintGenerator = servingPrintGenerator;
            _printQueue = printQueue;
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

        [HttpPost("{id:int}/PrintReceipt")]
        public async Task<ActionResult> PrintReceipt(int id, int? pointOfSaleId)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            var printerId = await _printDispatcher.GetReceiptPrinterAsync(pointOfSaleId ?? order.PointOfSaleId);

            if (printerId == null)
            {
                return BadRequest();
            }

            var data = _receiptPrintGenerator.Generate(order);
            await _printQueue.EnqueueAsync(printerId.Value, new PrintJob()
            {
                Name = $"Kvittering {order.Id}",
                Data = data
            });
            await _mediator.Publish(new PrintJobCreated(printerId.Value));

            return NoContent();
        }

        [HttpPost("{id:int}/ProcessPresale")]
        public async Task<ActionResult> ProcessPresale(int id, int pointOfSaleId, int[] redeem)
        {
            var order = await _db.Orders
                .Include(x => x.Lines)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            var printerId = await _printDispatcher.GetServingPrinterAsync(pointOfSaleId);

            if (printerId == null)
            {
                return BadRequest();
            }

            var data = _servingPrintGenerator.Generate(order, pointOfSaleId);
            await _printQueue.EnqueueAsync(printerId.Value, new PrintJob()
            {
                Name = $"Servering {order.Id}",
                Data = data
            });
            await _mediator.Publish(new PrintJobCreated(printerId.Value));

            return NoContent();
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
