using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Entity
{
    public class Detail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ArticleNumber { get; set; }
        public int Price { get; set; }
        public string Note { get; set; }
        public List<Delivery> Deliverys { get; set; }

        public void CopyFrom(Detail detail)
        {
            Name = detail.Name;
            ArticleNumber = detail.ArticleNumber;
            Price = detail.Price;
            Note = detail.Note;
        }
    }
}
