using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Entity
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Contacts { get; set; }
        public List<Orders> Orders { get; set; }

        public void CopyFrom(Customer provider)
        {
            Name = provider.Name;
            Address = provider.Address;
            Phone = provider.Phone;
            Contacts = provider.Contacts;
        }
    }
}
