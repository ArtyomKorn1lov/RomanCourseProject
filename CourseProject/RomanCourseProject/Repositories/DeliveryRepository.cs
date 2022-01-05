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

        public async Task Create(Delivery delivery)
        {
            await _orderDbContext.Set<Delivery>().AddAsync(delivery);
        }

        public async Task Delete(int id)
        {
            Delivery delivery = await GetById(id);
            if (delivery != null)
                _orderDbContext.Set<Delivery>().Remove(delivery);
        }

        public async Task<List<Delivery>> GetAll()
        {
            return await _orderDbContext.Set<Delivery>().ToListAsync();
        }

        public async Task<Delivery> GetById(int id)
        {
            return await _orderDbContext.Set<Delivery>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<List<Delivery>> GetByPrice(int price)
        {
            return await _orderDbContext.Set<Delivery>().Where(d => EF.Functions.Like(d.Price.ToString(), price.ToString())).ToListAsync();
        }

        public async Task Update(Delivery delivery)
        {
            Delivery _delivery = await GetById(delivery.Id);
            _delivery.CopyFrom(delivery);
        }
    }
}
