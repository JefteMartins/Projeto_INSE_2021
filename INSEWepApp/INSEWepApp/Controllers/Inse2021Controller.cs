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

        [HttpGet]
        [Route("Search")]
        public async Task<ActionResult<IEnumerable<object>>> Search(
            string? NoUf = null,
            string? SgUf = null,
            string? NoMunicipio = null,
            string? NoEscola = null,
            double? TpTipoRede = null,
            double? TpLocalizacao = null,
            double? TpCapital = null,
            double? QtdAlunosInse = null,
            double? MediaInse = null,
            string? InseClassificacao = null,
            double? PcNivel1 = null,
            double? PcNivel2 = null,
            double? PcNivel3 = null,
            double? PcNivel4 = null,
            double? PcNivel5 = null,
            double? PcNivel6 = null,
            double? PcNivel7 = null,
            double? PcNivel8 = null
        )
        {
            IQueryable<InseEsc2021> query = _context.InseEsc2021s;

            if (!string.IsNullOrEmpty(NoUf))
            {
                query = query.Where(e => e.NoUf == NoUf);
            }
            if (!string.IsNullOrEmpty(SgUf))
            {
                query = query.Where(e => e.SgUf == SgUf);
            }

            if (!string.IsNullOrEmpty(NoMunicipio))
            {
                query = query.Where(e => e.NoMunicipio == NoMunicipio);
            }

            if (!string.IsNullOrEmpty(NoEscola))
            {
                query = query.Where(e => e.NoEscola == NoEscola);
            }

            if (TpTipoRede.HasValue)
            {
                query = query.Where(e => e.TpTipoRede == TpTipoRede);
            }

            if (TpLocalizacao.HasValue)
            {
                query = query.Where(e => e.TpLocalizacao == TpLocalizacao);
            }

            if (TpCapital.HasValue)
            {
                query = query.Where(e => e.TpCapital == TpCapital);
            }

            if (QtdAlunosInse.HasValue)
            {
                query = query.Where(e => e.QtdAlunosInse == QtdAlunosInse);
            }

            if (MediaInse.HasValue)
            {
                query = query.Where(e => e.MediaInse == MediaInse);
            }

            if (!string.IsNullOrEmpty(InseClassificacao))
            {
                query = query.Where(e => e.InseClassificacao == InseClassificacao);
            }

            if (PcNivel1.HasValue)
            {
                query = query.Where(e => e.PcNivel1 == PcNivel1);
            }

            // Adicione mais condições conforme necessário para as outras propriedades

            // Projeção para retornar apenas as propriedades desejadas
            var result = await query
                .Select(e => new
                {
                    e.NoUf,
                    e.NoMunicipio,
                    e.NoEscola,
                    // Adicione mais propriedades conforme necessário
                })
                .ToListAsync();

            return result;
        }

        [HttpGet]
        [Route("SearchCount")]

        public async Task<ActionResult<IEnumerable<object>>> SearchCount(
        string? NoUf = null,
        bool? countPais = null,
        string? SgUf = null,
        string? NoMunicipio = null,
        string? NoEscola = null,
        double? TpTipoRede = null,
        double? TpLocalizacao = null,
        double? TpCapital = null,
        double? QtdAlunosInse = null,
        double? MediaInse = null,
        string? InseClassificacao = null,
        double? PcNivel1 = null,
        double? PcNivel2 = null,
        double? PcNivel3 = null,
        double? PcNivel4 = null,
        double? PcNivel5 = null,
        double? PcNivel6 = null,
        double? PcNivel7 = null,
        double? PcNivel8 = null
        )
        {
            IQueryable<InseEsc2021> query = _context.InseEsc2021s;

            if (!string.IsNullOrEmpty(NoUf))
            {
                query = query.Where(e => e.NoUf == NoUf);
            }
            if (!string.IsNullOrEmpty(SgUf))
            {
                query = query.Where(e => e.SgUf == SgUf);
            }

            if (!string.IsNullOrEmpty(NoMunicipio))
            {
                query = query.Where(e => e.NoMunicipio == NoMunicipio);
            }

            if (!string.IsNullOrEmpty(NoEscola))
            {
                query = query.Where(e => e.NoEscola == NoEscola);
            }

            if (TpTipoRede.HasValue)
            {
                query = query.Where(e => e.TpTipoRede == TpTipoRede);
            }

            if (TpLocalizacao.HasValue)
            {
                query = query.Where(e => e.TpLocalizacao == TpLocalizacao);
            }

            if (TpCapital.HasValue)
            {
                query = query.Where(e => e.TpCapital == TpCapital);
            }

            if (QtdAlunosInse.HasValue)
            {
                query = query.Where(e => e.QtdAlunosInse == QtdAlunosInse);
            }

            if (MediaInse.HasValue)
            {
                query = query.Where(e => e.MediaInse == MediaInse);
            }

            if (!string.IsNullOrEmpty(InseClassificacao))
            {
                query = query.Where(e => e.InseClassificacao == InseClassificacao);
            }

            if (PcNivel1.HasValue)
            {
                query = query.Where(e => e.PcNivel1 < PcNivel1);
            }
            //adicionar outros PcNivel
            if (PcNivel2.HasValue)
            {
                query = query.Where(e => e.PcNivel2 < PcNivel2);
            }
            if (PcNivel3.HasValue)
            {
                query = query.Where(e => e.PcNivel3 < PcNivel3);
            }
            if (PcNivel4.HasValue)
            {
                query = query.Where(e => e.PcNivel4 < PcNivel4);
            }
            if (PcNivel5.HasValue)
            {
                query = query.Where(e => e.PcNivel5 < PcNivel5);
            }
            if (PcNivel6.HasValue)
            {
                query = query.Where(e => e.PcNivel6 < PcNivel6);
            }
            if (PcNivel7.HasValue)
            {
                query = query.Where(e => e.PcNivel7 < PcNivel7);
            }
            if (PcNivel8.HasValue)
            {
                query = query.Where(e => e.PcNivel8 < PcNivel8);
            }

            int count = await query.CountAsync();

            var countByEstado = await _context.InseEsc2021s
                .GroupBy(e => e.SgUf)
                .Select(group => new
                {
                    State = group.Key,
                    Count = group.Count()
                })
                .ToListAsync();
            var result = new
            {
                Count = count,
                CountByEstado = countByEstado
            };

            return Ok(result);
       
        }
        
    }
}
