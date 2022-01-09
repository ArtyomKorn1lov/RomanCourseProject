using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Entity
{
    public class Delivery
    {
        public int Id { get; set; }
        public string DeliveryMethod { get; set; }
        public int Price { get; set; }
        public DateTime Date { get; set; }
        public List<Orders> Orders { get; set; }
        public void CopyFrom(Delivery delivery)
        {
            DeliveryMethod = delivery.DeliveryMethod;
            Price = delivery.Price;
            Date = delivery.Date;
        }
    }
}
