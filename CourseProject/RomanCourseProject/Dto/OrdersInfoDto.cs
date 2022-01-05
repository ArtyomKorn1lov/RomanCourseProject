using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Dto
{
    public class OrdersInfoDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public string ProductName { get; set; }
        public string CustomerName { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int DeliveryId { get; set; }
        public int Price { get; set; }

        public OrdersInfoDto(int id, int detailId, int providerId, string detailName, string providerName, int count, DateTime date, int deliveryId, int price)
        {
            Id = id;
            ProductId = detailId;
            CustomerId = providerId;
            ProductName = detailName;
            CustomerName = providerName;
            Count = count;
            Date = date;
            DeliveryId = deliveryId;
            Price = price;
        }
    }
}
