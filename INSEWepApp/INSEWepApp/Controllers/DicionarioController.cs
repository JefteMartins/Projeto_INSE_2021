using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace INSEWepApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DicionarioController : ControllerBase
    {
        private readonly INSE2021Context _context;
        public DicionarioController(INSE2021Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dicionario>>> GetDicionario()
        {
            return await _context.Dicionarios.ToListAsync();
        }
    }
}
