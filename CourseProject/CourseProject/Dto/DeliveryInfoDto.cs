using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Dto
{
    public class DeliveryInfoDto
    {
        public int Id { get; set; }
        public int DetailId { get; set; }
        public int ProviderId { get; set; }
        public string DetailName { get; set; }
        public string ProviderName { get; set; }
        public int Count { get; set; }
        public DateTime Date { get; set; }
        public int Price { get; set; }

        public DeliveryInfoDto(int id, int detailId, int providerId, string detailName, string providerName, int count, DateTime date, int price)
        {
            Id = id;
            DetailId = detailId;
            ProviderId = providerId;
            DetailName = detailName;
            ProviderName = providerName;
            Count = count;
            Date = date;
            Price = price;
        }
    }
}
