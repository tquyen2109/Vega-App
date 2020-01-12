using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vega.API.Core;
using Vega.API.Core.Models;
using Vega.API.Extensions;
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

        public async Task<IEnumerable<Vehicle>> GetVehicles(VehicleQuery queryObj)
        {
           var query = context.Vehicles
                .Include(v => v.Features)
                 .ThenInclude(vf => vf.Features)
                .Include(v => v.Model)
                 .ThenInclude(m => m.Make)
                 .AsQueryable();
            if(queryObj.MakeId.HasValue)
                query = query.Where(v => v.Model.MakeId == queryObj.MakeId.Value);
            if(queryObj.ModelId.HasValue)
                query = query.Where(v => v.ModelId == queryObj.ModelId);
            //sort
            var columnsMap = new Dictionary<string, Expression<Func<Vehicle,object>>>()
            {
                ["make"] = v => v.Model.Make.Name,
                ["model"] = v => v.Model.Name,
                ["contactName"] = v => v.ContactName,
                ["id"] = v => v.Id,

            };
            query = query.ApplyOrdering(queryObj, columnsMap);
           
            return await query.ToListAsync();
        }
      
    }
}