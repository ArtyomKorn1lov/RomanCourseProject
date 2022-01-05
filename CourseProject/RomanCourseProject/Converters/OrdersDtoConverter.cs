using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Converters
{
    public class OrdersDtoConverter
    {
        public static OrdersDto ConvertToOrdersDto(Orders order)
        {
            if (order == null)
            {
                return null;
            }
            return new OrdersDto
            {
                Id = order.Id,
                ProductId = order.ProductId,
                CustomerId = order.CustomerId,
                Count = order.Count,
                Date = order.Date,
                DeliveryId = order.DeliveryId,
                Price = order.Price
            };
        }
        public static Orders CovertToDeliveryEntity(OrdersDto order)
        {
            if (order == null)
            {
                return null;
            }
            return new Orders
            {
                Id = order.Id,
                ProductId = order.ProductId,
                CustomerId = order.CustomerId,
                Count = order.Count,
                Date = order.Date,
                Price = order.Price
            };
        }
    }
}
