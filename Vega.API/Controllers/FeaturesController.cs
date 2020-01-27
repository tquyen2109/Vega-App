using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.API.Controllers.Resources;
using Vega.API.Models;
using Vega.API.Persistence;

namespace Vega.API.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;
        public FeaturesController(VegaDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }
        [HttpGet("/api/features")]
       
         public async Task<IEnumerable<KeyValuePairResource>> GetMakes()
        {
           var features = await context.Features.ToListAsync();
           return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
    }
}