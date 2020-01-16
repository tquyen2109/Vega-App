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
    public class PhotoRepository : IPhotoRepository
    {
        private readonly VegaDbContext context;
        public PhotoRepository(VegaDbContext context)
        {
            this.context = context;
        }
        public async Task<IEnumerable<Photo>> GetPhotos(int vehicleId)
        {
            return await context.Photos
                .Where(p => p.VehicleId == vehicleId)
                .ToListAsync();
        }
    }
}