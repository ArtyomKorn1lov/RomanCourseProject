using CourseProject.Dto;
using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Converters
{
    public class ProviderDtoConverter
    {
        public static ProviderDto ConvertToProviderDto(Provider provider)
        {
            if (provider == null)
            {
                return null;
            }
            return new ProviderDto
            {
                Id = provider.Id,
                Name = provider.Name,
                Address = provider.Address,
                Phone = provider.Phone,
            };
        }
        public static Provider CovertToProviderEntity(ProviderDto provider)
        {
            if (provider == null)
            {
                return null;
            }
            return new Provider
            {
                Id = provider.Id,
                Name = provider.Name,
                Address = provider.Address,
                Phone = provider.Phone,
            };
        }
    }
}
