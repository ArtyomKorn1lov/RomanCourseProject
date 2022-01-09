using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Converters
{
    public class CustomerDtoConverter
    {
        public static CustomerDto ConvertToCustomerDto(Customer customer)
        {
            if (customer == null)
            {
                return null;
            }
            return new CustomerDto
            {
                Id = customer.Id,
                Name = customer.Name,
                Address = customer.Address,
                Phone = customer.Phone,
                Contacts = customer.Contacts,
            };
        }
        public static Customer CovertToCustomerEntity(CustomerDto customer)
        {
            if (customer == null)
            {
                return null;
            }
            return new Customer
            {
                Id = customer.Id,
                Name = customer.Name,
                Address = customer.Address,
                Phone = customer.Phone,
                Contacts = customer.Contacts,
            };
        }
    }
}
