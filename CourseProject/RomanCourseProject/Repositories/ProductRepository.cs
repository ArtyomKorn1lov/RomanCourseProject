using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private OrderDbContext _orderDbContext;

        public ProductRepository(OrderDbContext context)
        {
            _orderDbContext = context;
        }

        public async Task Create(Product product)
        {
            await _orderDbContext.Set<Product>().AddAsync(product);
        }

        public async Task Delete(int id)
        {
            Product product = await GetById(id);
            if (product != null)
                _orderDbContext.Set<Product>().Remove(product);
        }

        public async Task<List<Product>> GetAll()
        {
            return await _orderDbContext.Set<Product>().ToListAsync();
        }

        public async Task<Product> GetById(int id)
        {
            return await _orderDbContext.Set<Product>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Product product)
        {
            Product _product = await GetById(product.Id);
            _product.CopyFrom(product);
        }

        public async Task<List<Product>> GetByName(string name)
        {
            return await _orderDbContext.Set<Product>().Where(d => EF.Functions.Like(d.Name, name)).ToListAsync();
        }
    }
}
