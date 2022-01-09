using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Entity
{
    public class Orders
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int DeliveryId { get; set; }
        public int Price { get; set; }

        public void CopyFrom(Orders delivery)
        {
            ProductId = delivery.ProductId;
            CustomerId = delivery.CustomerId;
            Count = delivery.Count;
            Date = delivery.Date;
            DeliveryId = delivery.DeliveryId;
            Price = delivery.Price;
        }
    }
}
