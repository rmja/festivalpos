using FestivalPOS.Models;
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
    public class SumUpController : ControllerBase
    {
        private readonly PosContext _db;

        public SumUpController(PosContext db)
        {
            _db = db;
        }

        [HttpPost("Affiliates")]
        public async Task<SumUpAffiliate> CreateAffiliate(SumUpAffiliate affiliate)
        {
            _db.SumUpAffiliates.Add(affiliate);

            await _db.SaveChangesAsync();

            return affiliate;
        }

        [HttpGet("Affiliates")]
        public Task<List<SumUpAffiliate>> GetAllAffiliates()
        {
            return _db.SumUpAffiliates.ToListAsync();
        }

        [HttpDelete("Affiliates/{key}")]
        public async Task<ActionResult> DeleteAffiliate(string key)
        {
            var affiliate = await _db.SumUpAffiliates.FirstOrDefaultAsync(x => x.Key == key);

            if (affiliate == null)
            {
                return NotFound();
            }

            _db.SumUpAffiliates.Remove(affiliate);

            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
