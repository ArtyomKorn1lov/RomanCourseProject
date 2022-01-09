using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private OrderDbContext _orderDbContext;

        public OrdersRepository(OrderDbContext autoDbContext)
        {
            _orderDbContext = autoDbContext;
        }

        public async Task Create(Orders order)
        {
            await _orderDbContext.Set<Orders>().AddAsync(order);
        }

        public async Task Delete(int id)
        {
            Orders order = await GetById(id);
            if (order != null)
                _orderDbContext.Set<Orders>().Remove(order);
        }

        public async Task<List<Orders>> GetAll()
        {
            return await _orderDbContext.Set<Orders>().ToListAsync();
        }

        public async Task<Orders> GetById(int id)
        {
            return await _orderDbContext.Set<Orders>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Orders order)
        {
            Orders _order = await GetById(order.Id);
            _order.CopyFrom(order);
        }

        public async Task<List<Orders>> GetByProductName(int id)
        {
            return await _orderDbContext.Set<Orders>().Where(d => EF.Functions.Like(d.CustomerId.ToString(), id.ToString())).ToListAsync();
        }

        public async Task<List<Orders>> GetByCustomerName(int id)
        {
            return await _orderDbContext.Set<Orders>().Where(d => EF.Functions.Like(d.ProductId.ToString(), id.ToString())).ToListAsync();
        }

        public async Task<Orders> CheckByProductId(int id)
        {
            return await _orderDbContext.Set<Orders>().FirstOrDefaultAsync(d => d.ProductId == id);
        }

        public async Task<Orders> CheckByCustomerId(int id)
        {
            return await _orderDbContext.Set<Orders>().FirstOrDefaultAsync(d => d.CustomerId == id);
        }

        public async Task<Orders> CheckByDeliveryId(int id)
        {
            return await _orderDbContext.Set<Orders>().FirstOrDefaultAsync(d => d.DeliveryId == id);
        }
    }
}
