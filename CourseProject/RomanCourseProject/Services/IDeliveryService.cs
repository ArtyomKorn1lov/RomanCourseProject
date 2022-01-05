using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public interface IDeliveryService
    {
        Task<List<Delivery>> GetAll();
        Task<Delivery> GetById(int id);
        Task<bool> Create(Delivery delivery);
        Task<bool> Update(Delivery delivery);
        Task<bool> Delete(int id);
        Task<List<Delivery>> GetByPrice(int price);
    }
}
