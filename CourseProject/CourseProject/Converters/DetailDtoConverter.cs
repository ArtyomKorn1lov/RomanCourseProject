using CourseProject.Dto;
using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Converters
{
    public static class DetailDtoConverter
    {
        public static DetailDto ConvertToDetailDto(Detail detail)
        {
            if (detail == null)
            {
                return null;
            }
            return new DetailDto
            {
                Id = detail.Id,
                Name = detail.Name,
                ArticleNumber = detail.ArticleNumber,
                Price = detail.Price,
                Note = detail.Note
            };
        }
        public static Detail CovertToDetailEntity(DetailDto detail)
        {
            if (detail == null)
            {
                return null;
            }
            return new Detail
            {
                Id = detail.Id,
                Name = detail.Name,
                ArticleNumber = detail.ArticleNumber,
                Price = detail.Price,
                Note = detail.Note
            };
        }
    }
}
