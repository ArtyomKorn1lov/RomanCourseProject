using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Entity
{
    public class Delivery
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public int DetailId { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int Price { get; set; }

        public void CopyFrom(Delivery delivery)
        {
            ProviderId = delivery.ProviderId;
            DetailId = delivery.DetailId;
            Count = delivery.Count;
            Date = delivery.Date;
            Price = delivery.Price;
        }
    }
}
