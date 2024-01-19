using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace INSEWepApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Inse2021Controller : ControllerBase
    {
        private readonly INSE2021Context _context;
        public Inse2021Controller(INSE2021Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InseEsc2021>>> GetInse2021()
        {
            return await _context.InseEsc2021s.ToListAsync();
        }

        // get utilizando o NO_UF
        [HttpGet("{NoUf}")]
        public async Task<ActionResult<IEnumerable<InseEsc2021>>> GetInse2021(string NoUf)
        {
            return await _context.InseEsc2021s.Where(x => x.NoUf == NoUf).ToListAsync();
        }
    }
}
