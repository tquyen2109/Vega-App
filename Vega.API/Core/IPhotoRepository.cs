using System.Collections.Generic;
using System.Threading.Tasks;
using Vega.API.Core.Models;

namespace Vega.API.Core
{
    public interface IPhotoRepository
    {
         Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}