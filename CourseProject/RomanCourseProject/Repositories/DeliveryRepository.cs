using Microsoft.EntityFrameworkCore;
using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public class DeliveryRepository : IDeliveryRepository
    {
        private OrderDbContext _orderDbContext;

        public DeliveryRepository(OrderDbContext context)
        {
            _orderDbContext = context;
        }

        public void Create(Delivery delivery)
        {
            _orderDbContext.Set<Delivery>().Add(delivery);
        }

        public void Delete(int id)
        {
            Delivery delivery = GetById(id);
            if (delivery != null)
                _orderDbContext.Set<Delivery>().Remove(delivery);
        }

        public List<Delivery> GetAll()
        {
            return _orderDbContext.Set<Delivery>().ToList();
        }

        public Delivery GetById(int id)
        {
            return _orderDbContext.Set<Delivery>().FirstOrDefault(d => d.Id == id);
        }

        public List<Delivery> GetByPrice(int price)
        {
            return _orderDbContext.Set<Delivery>().Where(d => EF.Functions.Like(d.Price.ToString(), price.ToString())).ToList();
        }

        public void Update(Delivery delivery)
        {
            Delivery _delivery = GetById(delivery.Id);
            _delivery.CopyFrom(delivery);
        }
    }
}
