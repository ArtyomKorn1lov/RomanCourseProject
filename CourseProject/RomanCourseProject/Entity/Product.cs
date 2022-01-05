using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Entity
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Note { get; set; }
        public List<Orders> Orders { get; set; }

        public void CopyFrom(Product detail)
        {
            Name = detail.Name;
            Price = detail.Price;
            Note = detail.Note;
        }
    }
}
