using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Converters
{
    public class DeliveryDtoConverter
    {
        public static DeliveryDto ConvertToDeliveryDto(Delivery delivery)
        {
            if(delivery == null)
            {
                return null;
            }
            return new DeliveryDto
            {
                Id = delivery.Id,
                DeliveryMethod = delivery.DeliveryMethod,
                Price = delivery.Price,
                Date = delivery.Date,
            };
        }
        public static Delivery ConvertToDeliveryEntity(DeliveryDto delivery)
        {
            if (delivery == null)
            {
                return null;
            }
            return new Delivery
            {
                Id = delivery.Id,
                DeliveryMethod = delivery.DeliveryMethod,
                Price = delivery.Price,
                Date = delivery.Date,
            };
        }
    }
}
