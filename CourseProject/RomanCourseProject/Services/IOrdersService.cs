using RomanCourseProject.Entity;
using RomanCourseProject.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public interface IOrdersService
    {
        Task<List<OrdersInfoDto>> GetAll();
        Task<Orders> GetById(int id);
        Task<bool> Create(Orders order);
        Task<bool> Update(Orders order);
        Task<bool> Delete(int id);
        Task<List<OrdersInfoDto>> GetByProductName(string name);
        Task<List<OrdersInfoDto>> GetByCustomerName(string name);
        Task<Orders> CheckByProductId(int id);
        Task<Orders> CheckByCustomerId(int id);
        Task<Orders> CheckByDeliveryId(int id);
        Task<List<Orders>> FindOrdersByProductName(List<Product> products);
        Task<List<Orders>> FindOrdersByCustomersName(List<Customer> cutomers);
        Task<List<OrdersInfoDto>> CompareByOrdersInfoDto(List<Orders> orders);
    }
}
