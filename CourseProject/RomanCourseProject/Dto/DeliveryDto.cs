using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Dto
{
    public class DeliveryDto
    {
        public int Id { get; set; }
        public int DeliveryMethod { get; set; }
        public int Price { get; set; }
        public DateTime Date { get; set; }
    }
}
