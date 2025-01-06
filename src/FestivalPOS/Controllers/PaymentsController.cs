using FestivalPOS.Models;
using FestivalPOS.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PaymentsController(PosContext db, IMediator mediator) : ControllerBase
{
    [HttpPost("/api/Orders/{orderId:int}/Payments")]
    public async Task<ActionResult<Payment>> CreateOnOrder(int orderId, Payment payment)
    {
        var order = await db.Orders.FirstOrDefaultAsync(x => x.Id == orderId);

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

            var account = await db.Accounts.FirstOrDefaultAsync(x => x.Id == payment.AccountId);

            if (account is null)
            {
                return BadRequest();
            }

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

        await db.SaveChangesAsync();

        if (order.AmountDue == 0)
        {
            await mediator.Publish(new OrderPayedNotification(order.Id, payment.Id));
        }

        return payment;
    }

    [HttpPost("/api/Accounts/{accountId:int}/Deposit")]
    public async Task<ActionResult<Payment>> DepositOnAccount(int accountId, decimal amount)
    {
        var account = await db.Accounts.FirstOrDefaultAsync(x => x.Id == accountId);

        if (account == null)
        {
            return NotFound();
        }

        account.RemainingCredit += amount;

        var payment = new Payment()
        {
            Method = PaymentMethod.Deposit,
            Amount = -amount,
            AccountId = account.Id,
            Created = LocalClock.Now
        };

        db.Payments.Add(payment);
        await db.SaveChangesAsync();

        return payment;
    }

    [HttpGet]
    public Task<List<Payment>> GetAll(
        int? terminalId,
        int? pointOfSaleId,
        int? accountId,
        DateTimeOffset? from,
        DateTimeOffset? to
    )
    {
        var query = db.Payments.AsQueryable();

        if (terminalId != null)
        {
            query = query.Where(x => x.Order != null && x.Order.TerminalId == terminalId);
        }

        if (pointOfSaleId != null)
        {
            query = query.Where(x => x.Order != null && x.Order.PointOfSaleId == pointOfSaleId);
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
