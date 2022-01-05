using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public interface IOrdersRepository
    {
        Task<List<Orders>> GetAll();
        Task<Orders> GetById(int id);
        Task Create(Orders order);
        Task Update(Orders order);
        Task Delete(int id);
        Task<List<Orders>> GetByProductName(int id);
        Task<List<Orders>> GetByCustomerName(int id);
        Task<Orders> CheckByProductId(int id);
        Task<Orders> CheckByCustomerId(int id);
        Task<Orders> CheckByDeliveryId(int id);
    }
}
