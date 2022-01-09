using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public interface IDeliveryService
    {
        List<Delivery> GetAll();
        Delivery GetById(int id);
        bool Create(Delivery delivery);
        bool Update(Delivery delivery);
        bool Delete(int id);
        List<Delivery> GetByPrice(int price);
    }
}
