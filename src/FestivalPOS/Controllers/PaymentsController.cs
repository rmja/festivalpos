using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
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
    public class PaymentsController : ControllerBase
    {
        private readonly PosContext _db;
        private readonly IMediator _mediator;

        public PaymentsController(PosContext db, IMediator mediator)
        {
            _db = db;
            _mediator = mediator;
        }

        [HttpPost("/api/Orders/{orderId:int}/Payments")]
        public async Task<ActionResult<Payment>> Create(int orderId, Payment payment)
        {
            var order = await _db.Orders.FirstOrDefaultAsync(x => x.Id == orderId);

            if (order == null)
            {
                return NotFound();
            }

            if (payment.Method == PaymentMethod.Account)
            {
                if (payment.AccountId == null)
                {
                    return BadRequest();
                }

                var account = await _db.Accounts.FirstOrDefaultAsync(x => x.Id == payment.AccountId);

                if (account.RemainingCredit >= payment.Amount)
                {
                    account.RemainingCredit -= payment.Amount;
                }
                else
                {
                    return Conflict();
                }
            }

            payment.Created = LocalClock.Now;

            order.Payments.Add(payment);
            order.AmountDue -= payment.Amount;

            await _db.SaveChangesAsync();

            if (order.AmountDue == 0)
            {
                await _mediator.Publish(new OrderPayedNotification(order.Id, payment.Id));
            }

            return payment;
        }

        [HttpGet]
        public Task<List<Payment>> GetAll(int? terminalId, int? pointOfSaleId, int? accountId, DateTimeOffset? from, DateTimeOffset? to)
        {
            var query = _db.Payments.AsQueryable();

            if (terminalId != null)
            {
                query = query.Where(x => x.Order.TerminalId == terminalId);
            }

            if (pointOfSaleId != null)
            {
                query = query.Where(x => x.Order.PointOfSaleId == pointOfSaleId);
            }

            if (accountId != null)
            {
                query = query.Where(x => x.AccountId == accountId);
            }

            if (from != null)
            {
                query = query.Where(x => x.Created >= from.Value);
            }

            if (to != null)
            {
                query = query.Where(x => x.Created < to.Value);
            }

            return query.ToListAsync();
        }
    }
}
