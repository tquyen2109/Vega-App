using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.API.Models
{   
    [Table("VehicleFeatures")]
    public class VehicleFeature
    {
        public int VehicleId { get; set; }
        public int FeatureId { get; set; }
        public Vehicle Vehicles { get; set; }
        public Feature Features { get; set; }

    }
}