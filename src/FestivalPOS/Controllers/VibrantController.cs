using FestivalPOS.Models;
using FestivalPOS.VibrantApi;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VibrantController : ControllerBase
    {
        private readonly PosContext _db;

        public VibrantController(PosContext db)
        {
            _db = db;
        }

        [HttpPost("Accounts")]
        public async Task<VibrantAccount> CreateAccount(VibrantAccount account)
        {
            _db.VibrantAccounts.Add(account);
            await _db.SaveChangesAsync();

            return account;
        }

        [HttpGet("Accounts")]
        public Task<List<VibrantAccount>> GetAllAccounts()
        {
            return _db.VibrantAccounts.ToListAsync();
        }

        [HttpDelete("Accounts/{accountId}")]
        public async Task<ActionResult> DeleteAccount(string accountId)
        {
            var account = await _db.VibrantAccounts.FirstOrDefaultAsync(x => x.Id == accountId);
            if (account is null)
            {
                return NotFound();
            }

            _db.VibrantAccounts.Remove(account);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("Accounts/{accountId}/Terminals")]
        public async Task<ActionResult<VibrantApi.Terminal[]>> GetVibrantTerminalsAsync(
            string accountId,
            CancellationToken cancellationToken
        )
        {
            var account = await _db.VibrantAccounts.FirstOrDefaultAsync(
                x => x.Id == accountId,
                cancellationToken
            );
            if (account is null)
            {
                return NotFound();
            }

            var client = ActivatorUtilities.CreateInstance<VibrantApiClient>(
                HttpContext.RequestServices
            );
            client.ApiKey = account.ApiKey;
            client.Sandbox = account.Sandbox;

            var terminals = await client.GetTerminalsAsync(cancellationToken);
            return terminals;
        }

        [HttpPost("Accounts/{accountId}/PaymentIntents")]
        public async Task<ActionResult<string>> CreatePaymentIntent(
            string accountId,
            PaymentIntent paymentIntent,
            CancellationToken cancellationToken
        )
        {
            var account = await _db.VibrantAccounts.FirstOrDefaultAsync(
                x => x.Id == accountId,
                cancellationToken
            );
            if (account is null)
            {
                return NotFound();
            }

            var client = ActivatorUtilities.CreateInstance<VibrantApiClient>(
                HttpContext.RequestServices
            );
            client.ApiKey = account.ApiKey;
            client.Sandbox = account.Sandbox;

            var id = await client.CreatePaymentIntentAsync(paymentIntent, cancellationToken);
            return id;
        }

        [HttpGet("Accounts/{accountId}/PaymentIntents/{paymentIntentId}")]
        public async Task<ActionResult<PaymentIntent>> GetPaymentIntent(
            string accountId,
            string paymentIntentId,
            CancellationToken cancellationToken
        )
        {
            var account = await _db.VibrantAccounts.FirstOrDefaultAsync(
                x => x.Id == accountId,
                cancellationToken
            );
            if (account is null)
            {
                return NotFound();
            }

            var client = ActivatorUtilities.CreateInstance<VibrantApiClient>(
                HttpContext.RequestServices
            );
            client.ApiKey = account.ApiKey;
            client.Sandbox = account.Sandbox;

            var paymentIntent = await client.GetPaymentIntentAsync(
                paymentIntentId,
                cancellationToken
            );
            return paymentIntent;
        }
    }
}
