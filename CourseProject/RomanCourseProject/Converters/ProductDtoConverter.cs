using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Converters
{
    public static class ProductDtoConverter
    {
        public static ProductDto ConvertToProductDto(Product product)
        {
            if (product == null)
            {
                return null;
            }
            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Note = product.Note
            };
        }
        public static Product CovertToProductEntity(ProductDto product)
        {
            if (product == null)
            {
                return null;
            }
            return new Product
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Note = product.Note
            };
        }
    }
}
