using CourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public class ProviderRepository : IProviderRepository
    {
        private AutoDbContext _autoDbContext;

        public ProviderRepository(AutoDbContext context)
        {
            _autoDbContext = context;
        }

        public async Task Create(Provider provider)
        {
            await _autoDbContext.Set<Provider>().AddAsync(provider);
        }

        public async Task Delete(int id)
        {
            Provider provider = await GetById(id);
            if (provider != null)
                _autoDbContext.Set<Provider>().Remove(provider);
        }

        public async Task<List<Provider>> GetAll()
        {
            return await _autoDbContext.Set<Provider>().ToListAsync();
        }

        public async Task<Provider> GetById(int id)
        {
            return await _autoDbContext.Set<Provider>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Provider provider)
        {
            Provider _provider = await GetById(provider.Id);
            _provider.CopyFrom(provider);
        }

        public async Task<List<Provider>> GetByName(string name)
        {
            return await _autoDbContext.Set<Provider>().Where(d => EF.Functions.Like(d.Name, name)).ToListAsync();
        }
    }
}
