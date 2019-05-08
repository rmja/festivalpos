using KajfestPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KajfestPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly PosContext _db;

        public AccountsController(PosContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<Account> Create(Account account)
        {
            account.RemainingCredit = account.MaxCredit;
            _db.Accounts.Add(account);

            await _db.SaveChangesAsync();

            return account;
        }

        [HttpGet]
        public Task<List<Account>> GetAll()
        {
            return _db.Accounts.OrderBy(x => x.Number).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Account>> GetById(int id)
        {
            var account = await _db.Accounts.FirstOrDefaultAsync(x => x.Id == id);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Account>> Update(int id, JsonPatchDocument<Account> patch)
        {
            var account = await _db.Accounts.FirstOrDefaultAsync(x => x.Id == id);

            if (account == null)
            {
                return NotFound();
            }

            var oldMaxCredit = account.MaxCredit;

            patch.ApplyTo(account);
            account.RemainingCredit += account.MaxCredit - oldMaxCredit;
            await _db.SaveChangesAsync();

            return account;
        }

        [HttpPost("Reset")]
        public async Task ResetAll()
        {
            var accounts = await _db.Accounts.ToListAsync();

            foreach (var account in accounts)
            {
                account.RemainingCredit = account.MaxCredit;
            }

            await _db.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var account = await _db.Accounts.FirstOrDefaultAsync(x => x.Id == id);

            if (account == null)
            {
                return NotFound();
            }

            account.IsDeleted = true;
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}