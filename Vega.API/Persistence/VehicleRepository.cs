using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vega.API.Core;
using Vega.API.Models;

namespace Vega.API.Persistence
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly VegaDbContext context;
        public VehicleRepository(VegaDbContext context)
        {
            this.context = context;

        }
        public async Task<Vehicle> GetVehicleWithMake (int id)
        {
            return await context.Vehicles
            .Include(v => v.Model)
               .ThenInclude(m => m.Make)
            .SingleOrDefaultAsync(v => v.Id == id);
        }
        public async Task<Vehicle> GetVehicle(int id, bool includeRelated = true)
        {
            if(!includeRelated)
                return await context.Vehicles.FindAsync(id);

            return await context.Vehicles
            .Include(v => v.Features)
               .ThenInclude(vf => vf.Features)
            .Include(v => v.Model)
               .ThenInclude(m => m.Make)
            .SingleOrDefaultAsync(v => v.Id == id);
        }
        public void Add(Vehicle vehicle)
        {
            context.Vehicles.Add(vehicle);
        }

        public void Remove(Vehicle vehicle)
        {
            context.Vehicles.Remove(vehicle);
        }
    }
}