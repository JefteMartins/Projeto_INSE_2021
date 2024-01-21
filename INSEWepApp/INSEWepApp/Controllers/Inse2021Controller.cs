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
            double? PcNivel8 = null,
            bool? countNordeste = null,
            bool? countNorte = null,
            bool? countSudeste = null,
            bool? countSul = null,
            bool? countCentroOeste = null
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
                query = query.Where(e => e.NoEscola.Contains(NoEscola));
                query = query.OrderBy(e => e.NoEscola);
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
            if (countNordeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "AL" || e.SgUf == "BA" || e.SgUf == "CE" || e.SgUf == "MA" || e.SgUf == "PB" || e.SgUf == "PE" || e.SgUf == "PI" || e.SgUf == "RN" || e.SgUf == "SE");
            }
            if (countNorte.HasValue)
            {
                query = query.Where(e => e.SgUf == "AC" || e.SgUf == "AP" || e.SgUf == "AM" || e.SgUf == "PA" || e.SgUf == "RO" || e.SgUf == "RR" || e.SgUf == "TO");
            }
            if (countSudeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "ES" || e.SgUf == "MG" || e.SgUf == "RJ" || e.SgUf == "SP");
            }
            if (countSul.HasValue)
            {
                query = query.Where(e => e.SgUf == "PR" || e.SgUf == "RS" || e.SgUf == "SC");

            }
            if (countCentroOeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "DF" || e.SgUf == "GO" || e.SgUf == "MT" || e.SgUf == "MS");
            }

            var result = await query
                .Select(e => new
                {
                    e.NoUf,
                    e.SgUf,
                    e.NoMunicipio,
                    e.NoEscola,
                    e.TpTipoRede,
                    e.TpLocalizacao,
                    e.TpCapital,
                    e.QtdAlunosInse,
                    e.MediaInse,
                    e.InseClassificacao,
                    e.PcNivel1,
                    e.PcNivel2,
                    e.PcNivel3,
                    e.PcNivel4,
                    e.PcNivel5,
                    e.PcNivel6,
                    e.PcNivel7,
                    e.PcNivel8
                })
                .ToListAsync();


            return result;
        }

        [HttpGet]
        [Route("MediasPorLocalidade")]
        public async Task<ActionResult<object>> MediasPorLocalidade(
            string? estado,
            string? cidade
            )
        {
            var resultado = new Dictionary<string, double?>();

            if (!string.IsNullOrEmpty(cidade))
            {
                resultado = await CalcularMediaLocalidade(cidade, false);

                return Ok(resultado);
            }
            if (!string.IsNullOrEmpty(estado))
            {
                resultado = await CalcularMediaLocalidade(estado, true);

                return Ok(resultado);
            }
            

            return Ok(resultado);
        }

        private async Task<Dictionary<string, double?>> CalcularMediaLocalidade(string estado, bool uf)
        {
            var resultados = new Dictionary<string, double?>();

            if (uf)
            {
                foreach (var nivel in Enumerable.Range(1, 8))
                {
                    var consulta = _context.InseEsc2021s
                        .Where(e => e.SgUf == estado)
                        .ToList()
                        .Where(e => GetPcNivelValue(e, nivel).HasValue);

                    double? mediaEstado = consulta.Average(e => GetPcNivelValue(e, nivel));

                    resultados[$"PcNivel{nivel}"] = mediaEstado;
                }
            }
            else
            {
                foreach (var nivel in Enumerable.Range(1, 8))
                {
                    var consulta = _context.InseEsc2021s
                        .Where(e => e.NoMunicipio == estado)
                        .ToList()
                        .Where(e => GetPcNivelValue(e, nivel).HasValue);

                    double? mediaEstado = consulta.Average(e => GetPcNivelValue(e, nivel));

                    resultados[$"PcNivel{nivel}"] = mediaEstado;
                }
            }

            return resultados;
        }



        [HttpGet]
        [Route("MediasRegioes")]
        public async Task<ActionResult<IEnumerable<object>>> MediasRegioes()
        {
            var mediaNordeste = await CalcularMediaRegiao("AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE");
            var mediaNorte = await CalcularMediaRegiao("AC", "AP", "AM", "PA", "RO", "RR", "TO");
            var mediaSudeste = await CalcularMediaRegiao("ES", "MG", "RJ", "SP");
            var mediaSul = await CalcularMediaRegiao("PR", "RS", "SC");
            var mediaCentroOeste = await CalcularMediaRegiao("DF", "GO", "MT", "MS");

            var resultado = new
            {
                MediaNordeste = mediaNordeste,
                MediaNorte = mediaNorte,
                MediaSudeste = mediaSudeste,
                MediaSul = mediaSul,
                MediaCentroOeste = mediaCentroOeste
            };

            return Ok(resultado);
        }

        private async Task<Dictionary<string, Dictionary<string, double?>>> CalcularMediaRegiao(params string[] estados)
        {
            var resultados = new Dictionary<string, Dictionary<string, double?>>();

            foreach (var nivel in Enumerable.Range(1, 8))
            {
                var consulta = _context.InseEsc2021s
                    .Where(e => estados.Contains(e.SgUf))
                    .ToList()
                    .Where(e => GetPcNivelValue(e, nivel).HasValue);

                double? mediaRegiao = consulta.Average(e => GetPcNivelValue(e, nivel));

                resultados[$"PcNivel{nivel}"] = new Dictionary<string, double?>
        {
            { "Media", mediaRegiao }
        };
            }

            return resultados;
        }



        private double? GetPcNivelValue(InseEsc2021 item, int nivel)
        {
            switch (nivel)
            {
                case 1: return item.PcNivel1;
                case 2: return item.PcNivel2;
                case 3: return item.PcNivel3;
                case 4: return item.PcNivel4;
                case 5: return item.PcNivel5;
                case 6: return item.PcNivel6;
                case 7: return item.PcNivel7;
                case 8: return item.PcNivel8;
                default: return null;
            }
        }

        [HttpGet]
        [Route("SearchCount")]
        public async Task<ActionResult<IEnumerable<object>>> SearchCount(
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
        double? PcNivel8 = null,
        bool? countNordeste = null,
        bool? countNorte = null,
        bool? countSudeste = null,
        bool? countSul = null,
        bool? countCentroOeste = null
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
            if (countNordeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "AL" || e.SgUf == "BA" || e.SgUf == "CE" || e.SgUf == "MA" || e.SgUf == "PB" || e.SgUf == "PE" || e.SgUf == "PI" || e.SgUf == "RN" || e.SgUf == "SE");
            }
            if (countNorte.HasValue)
            {
                query = query.Where(e => e.SgUf == "AC" || e.SgUf == "AP" || e.SgUf == "AM" || e.SgUf == "PA" || e.SgUf == "RO" || e.SgUf == "RR" || e.SgUf == "TO");
            }
            if (countSudeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "ES" || e.SgUf == "MG" || e.SgUf == "RJ" || e.SgUf == "SP");
            }
            if (countSul.HasValue)
            {
                query = query.Where(e => e.SgUf == "PR" || e.SgUf == "RS" || e.SgUf == "SC");
            }
            if (countCentroOeste.HasValue)
            {
                query = query.Where(e => e.SgUf == "DF" || e.SgUf == "GO" || e.SgUf == "MT" || e.SgUf == "MS");
            }

            int count = await query.CountAsync();

            var sumQtdAlunosInse = await _context.InseEsc2021s
                .SumAsync(e => e.QtdAlunosInse);

            var countByEstado = await _context.InseEsc2021s
                .GroupBy(e => e.NoUf)
                .Select(group => new
                {
                    State = group.Key,
                    Count = group.Count()
                })
                .ToListAsync();

            var countByInseClassificacao = await _context.InseEsc2021s
                .GroupBy(e => e.InseClassificacao)
                .Select(group => new
                {
                    InseClassificacao = group.Key,
                    Count = group.Count()
                })
                .ToListAsync();
            var result = new
            {
                Count = count,
                SumQtdAlunosInse = sumQtdAlunosInse,
                CountByEstado = countByEstado,
                CountByInseClassificacao = countByInseClassificacao
            };

            return Ok(result);

        }

    }
}
