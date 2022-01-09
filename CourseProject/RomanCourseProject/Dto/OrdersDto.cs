using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Dto
{
    public class OrdersDto
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int DeliveryId { get; set; }
        public int Price { get; set; }
    }
}
