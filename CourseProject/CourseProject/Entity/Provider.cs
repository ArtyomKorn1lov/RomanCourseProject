using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Entity
{
    public class Provider
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public List<Delivery> Deliverys { get; set; }

        public void CopyFrom(Provider provider)
        {
            Name = provider.Name;
            Address = provider.Address;
            Phone = provider.Phone;
        }
    }
}
