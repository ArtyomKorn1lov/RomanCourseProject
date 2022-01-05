using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public interface ICustomerRepository
    {
        Task<List<Customer>> GetAll();
        Task<Customer> GetById(int id);
        Task Create(Customer customer);
        Task Update(Customer customer);
        Task Delete(int id);
        Task<List<Customer>> GetByName(string name);
    }
}
