using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Dto
{
    public class OrdersInfoDto
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public string CustomerName { get; set; }
        public string ProductName { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int DeliveryId { get; set; }
        public int Price { get; set; }

        public OrdersInfoDto(int id, int productId, int customerId, string productName, string customerName, int count, DateTime date, int deliveryId, int price)
        {
            Id = id;
            ProductId = productId;
            CustomerId = customerId;
            ProductName = productName;
            CustomerName = customerName;
            Count = count;
            Date = date;
            DeliveryId = deliveryId;
            Price = price;
        }
    }
}
