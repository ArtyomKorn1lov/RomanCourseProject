using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public interface ICustomerService
    {
        Task<List<Customer>> GetAll();
        Task<Customer> GetById(int id);
        Task<bool> Create(Customer customer);
        Task<bool> Update(Customer customer);
        Task<bool> Delete(int id);
        Task<List<Customer>> GetByName(string name);

    }
}
