using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Dto
{
    public class DeliveryDto
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public int DetailId { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int Price { get; set; }
    }
}
