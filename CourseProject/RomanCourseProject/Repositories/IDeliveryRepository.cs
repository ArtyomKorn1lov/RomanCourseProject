using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public interface IDeliveryRepository
    {
        List<Delivery> GetAll();
        Delivery GetById(int id);
        void Create(Delivery delivery);
        void Update(Delivery delivery);
        void Delete(int id);
        List<Delivery> GetByPrice(int price);
    }
}
