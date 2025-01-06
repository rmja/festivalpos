using FestivalPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SumUpController(PosContext db) : ControllerBase
{
    [HttpPost("Affiliates")]
    public async Task<SumUpAffiliate> CreateAffiliate(SumUpAffiliate affiliate)
    {
        db.SumUpAffiliates.Add(affiliate);

        await db.SaveChangesAsync();

        return affiliate;
    }

    [HttpGet("Affiliates")]
    public Task<List<SumUpAffiliate>> GetAllAffiliates()
    {
        return db.SumUpAffiliates.ToListAsync();
    }

    [HttpDelete("Affiliates/{key}")]
    public async Task<ActionResult> DeleteAffiliate(string key)
    {
        var affiliate = await db.SumUpAffiliates.FirstOrDefaultAsync(x => x.Key == key);

        if (affiliate == null)
        {
            return NotFound();
        }

        db.SumUpAffiliates.Remove(affiliate);

        await db.SaveChangesAsync();

        return NoContent();
    }
}
