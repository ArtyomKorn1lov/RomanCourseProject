using RomanCourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private OrderDbContext _orderDbContext;

        public CustomerRepository(OrderDbContext context)
        {
            _orderDbContext = context;
        }

        public async Task Create(Customer customer)
        {
            await _orderDbContext.Set<Customer>().AddAsync(customer);
        }

        public async Task Delete(int id)
        {
            Customer customer = await GetById(id);
            if (customer != null)
                _orderDbContext.Set<Customer>().Remove(customer);
        }

        public async Task<List<Customer>> GetAll()
        {
            return await _orderDbContext.Set<Customer>().ToListAsync();
        }

        public async Task<Customer> GetById(int id)
        {
            return await _orderDbContext.Set<Customer>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task Update(Customer customer)
        {
            Customer _customer = await GetById(customer.Id);
            _customer.CopyFrom(customer);
        }

        public async Task<List<Customer>> GetByName(string name)
        {
            return await _orderDbContext.Set<Customer>().Where(d => EF.Functions.Like(d.Name, name)).ToListAsync();
        }
    }
}
