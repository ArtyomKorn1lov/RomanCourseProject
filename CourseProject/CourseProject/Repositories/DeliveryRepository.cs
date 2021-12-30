using CourseProject.Entity;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public class DeliveryRepository : IDeliveryRepository
    {
        private AutoDbContext _autoDbContext;

        public DeliveryRepository(AutoDbContext autoDbContext)
        {
            _autoDbContext = autoDbContext;
        }

        public async Task Create(Delivery delivery)
        {
            await _autoDbContext.Set<Delivery>().AddAsync(delivery);
        }

        public async Task Delete(int id)
        {
            Delivery delivery = await GetById(id);
            if (delivery != null)
                _autoDbContext.Set<Delivery>().Remove(delivery);
        }

        public async Task<List<Delivery>> GetAll()
        {
            return await _autoDbContext.Set<Delivery>().ToListAsync();
        }

        public async Task<Delivery> GetById(int id)
        {
            return await _autoDbContext.Set<Delivery>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Delivery delivery)
        {
            Delivery _delivery = await GetById(delivery.Id);
            _delivery.CopyFrom(delivery);
        }

        public async Task<List<Delivery>> GetByDetailName(int id)
        {
            return await _autoDbContext.Set<Delivery>().Where(d => EF.Functions.Like(d.DetailId.ToString(), id.ToString())).ToListAsync();
        }

        public async Task<List<Delivery>> GetByProviderName(int id)
        {
            return await _autoDbContext.Set<Delivery>().Where(d => EF.Functions.Like(d.ProviderId.ToString(), id.ToString())).ToListAsync();
        }

        public async Task<Delivery> CheckByDetailId(int id)
        {
            return await _autoDbContext.Set<Delivery>().FirstOrDefaultAsync(d => d.DetailId == id);
        }

        public async Task<Delivery> CheckByProviderId(int id)
        {
            return await _autoDbContext.Set<Delivery>().FirstOrDefaultAsync(d => d.ProviderId == id);
        }
    }
}
