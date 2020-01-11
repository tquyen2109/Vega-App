using System.Collections.Generic;
using System.Collections.ObjectModel;


namespace Vega.API.Controllers.Resources
{
    public class MakeResource : KeyValuePairResource
    {
        
      
        public ICollection<KeyValuePairResource> Models { get; set; }
        public MakeResource()
        {
            Models = new Collection<KeyValuePairResource>();
            
        }
    }
}