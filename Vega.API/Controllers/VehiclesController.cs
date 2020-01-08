using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.API.Models;
using Vega.API.Persistence;

namespace Vega.API.Controllers
{
    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly IMapper mapper;
        private readonly VegaDbContext context;
        public VehiclesController(IMapper mapper, VegaDbContext context)
        {
            this.context = context;
            this.mapper = mapper;

        }
        [HttpPost]
        public async Task<IActionResult> CreateVehicle([FromBody]VehicleResource vehicleResource)
        {
            if(!ModelState.IsValid)
             return BadRequest(ModelState);
            
            // var model = await context.Models.FindAsync(vehicleResource.ModelId);
            // if(model == null)
            // {
            //     ModelState.AddModelError("ModelId","Invalid modelId");
            //     return BadRequest(ModelState);
            // }
        

            var vehicle = mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            context.Vehicles.Add(vehicle);
            await context.SaveChangesAsync();
           var result = mapper.Map<Vehicle,VehicleResource>(vehicle);
            return Ok(result);
        }
        [HttpPut("{id}")] // /api/vehicles/id
        public async Task<IActionResult> UpdateVehicle(int id,[FromBody]VehicleResource vehicleResource)
        {
            if(!ModelState.IsValid)
             return BadRequest(ModelState);
            
            // var model = await context.Models.FindAsync(vehicleResource.ModelId);
            // if(model == null)
            // {
            //     ModelState.AddModelError("ModelId","Invalid modelId");
            //     return BadRequest(ModelState);
            // }
        

            var vehicle = await context.Vehicles.Include(v => v.Features).SingleOrDefaultAsync(v => v.Id == id); 
            mapper.Map<VehicleResource, Vehicle>(vehicleResource, vehicle);
            await context.SaveChangesAsync();
           var result = mapper.Map<Vehicle,VehicleResource>(vehicle);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle (int id)
        {
            var vehicle = await context.Vehicles.Include(v => v.Features).SingleOrDefaultAsync(v => v.Id==id);;
        
              context.Remove(vehicle);
        
            await context.SaveChangesAsync();
             return Ok(id);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult>GetVehicle(int id)
        {
             var vehicle = await context.Vehicles.Include(v => v.Features).SingleOrDefaultAsync(v => v.Id==id);

            var vehicleResource = mapper.Map<Vehicle,VehicleResource>(vehicle);
            return Ok(vehicleResource);
        }
    }
}