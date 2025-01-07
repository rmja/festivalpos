using FestivalPOS.Extensions;
using FestivalPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VibrantIo.PosApi;
using VibrantIo.PosApi.Models;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VibrantController(PosContext db, IVibrantPosApiClientFactory clientFactory)
    : ControllerBase
{
    [HttpPost("Accounts")]
    public async Task<VibrantAccount> CreateAccount(VibrantAccount account)
    {
        db.VibrantAccounts.Add(account);
        await db.SaveChangesAsync();

        return account;
    }

    [HttpGet("Accounts")]
    public Task<List<VibrantAccount>> GetAllAccounts()
    {
        return db.VibrantAccounts.ToListAsync();
    }

    [HttpDelete("Accounts/{accountId}")]
    public async Task<ActionResult> DeleteAccount(string accountId)
    {
        var account = await db.VibrantAccounts.FirstOrDefaultAsync(x => x.Id == accountId);
        if (account is null)
        {
            return NotFound();
        }

        db.VibrantAccounts.Remove(account);
        await db.SaveChangesAsync();

        return NoContent();
    }

    [HttpGet("Accounts/{accountId}/Terminals")]
    public async Task<
        ActionResult<List<VibrantIo.PosApi.Models.Terminal>>
    > GetVibrantTerminalsAsync(string accountId, CancellationToken cancellationToken)
    {
        var account = await db.VibrantAccounts.FirstOrDefaultAsync(
            x => x.Id == accountId,
            cancellationToken
        );
        if (account is null)
        {
            return NotFound();
        }

        var client = clientFactory.Create(
            new() { ApiKey = account.ApiKey, Sandbox = account.Sandbox }
        );

        var terminals = await client
            .Terminals.GetAllAsync(cancellationToken)
            .ToListAsync(cancellationToken);
        return terminals;
    }

    [HttpPost("Accounts/{accountId}/Terminals/{terminalId}/PaymentIntents")]
    public async Task<ActionResult<string>> CreatePaymentIntent(
        string accountId,
        string terminalId,
        PaymentIntentInit paymentIntent,
        string? idempotencyKey,
        CancellationToken cancellationToken
    )
    {
        var account = await db.VibrantAccounts.FirstOrDefaultAsync(
            x => x.Id == accountId,
            cancellationToken
        );
        if (account is null)
        {
            return NotFound();
        }

        var client = clientFactory.Create(
            new() { ApiKey = account.ApiKey, Sandbox = account.Sandbox }
        );

        var ppi = await client.Terminals.ProcessPaymentIntentAsync(
            terminalId,
            new() { PaymentIntent = paymentIntent },
            idempotencyKey,
            cancellationToken
        );
        return ppi.ObjectIdToProcess;
    }

    [HttpGet("Accounts/{accountId}/PaymentIntents/{paymentIntentId}")]
    public async Task<ActionResult<PaymentIntent>> GetPaymentIntent(
        string accountId,
        string paymentIntentId,
        CancellationToken cancellationToken
    )
    {
        var account = await db.VibrantAccounts.FirstOrDefaultAsync(
            x => x.Id == accountId,
            cancellationToken
        );
        if (account is null)
        {
            return NotFound();
        }

        var client = clientFactory.Create(
            new() { ApiKey = account.ApiKey, Sandbox = account.Sandbox }
        );

        var paymentIntent = await client.PaymentIntents.GetByIdAsync(
            paymentIntentId,
            cancellationToken
        );
        return paymentIntent;
    }
}
