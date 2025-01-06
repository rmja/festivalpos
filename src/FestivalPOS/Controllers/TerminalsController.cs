using FestivalPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerminalsController(PosContext db) : ControllerBase
    {
        [HttpPost]
        public async Task<Terminal> Create(Terminal terminal)
        {
            db.Terminals.Add(terminal);
            await db.SaveChangesAsync();

            return terminal;
        }

        [HttpGet]
        public Task<List<Terminal>> GetAll()
        {
            return db.Terminals.OrderBy(x => x.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Terminal>> GetById(int id)
        {
            var terminal = await db.Terminals.FirstOrDefaultAsync(x => x.Id == id);
            if (terminal is null)
            {
                return NotFound();
            }

            return terminal;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Terminal>> Update(int id, JsonPatchDocument<Terminal> patch)
        {
            var terminal = await db.Terminals.FirstOrDefaultAsync(x => x.Id == id);
            if (terminal is null)
            {
                return NotFound();
            }

            patch.ApplyTo(terminal);
            await db.SaveChangesAsync();

            return terminal;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var terminal = await db.Terminals.FirstOrDefaultAsync(x => x.Id == id);
            if (terminal is null)
            {
                return NotFound();
            }

            terminal.IsDeleted = true;
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}
