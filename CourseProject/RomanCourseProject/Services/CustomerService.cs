using RomanCourseProject.Entity;
using RomanCourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public class CustomerService : ICustomerService
    {
        private ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<bool> Create(Customer customer)
        {
            try
            {
                if(customer != null)
                {
                    await _customerRepository.Create(customer);
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                await _customerRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Customer>> GetAll()
        {
            try
            {
                return await _customerRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<Customer> GetById(int id)
        {
            try
            {
                return await _customerRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Customer customer)
        {
            try
            {
                await _customerRepository.Update(customer);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Customer>> GetByName(string name)
        {
            try
            {
                return await _customerRepository.GetByName($"%{name}%");
            }
            catch
            {
                return null;
            }
        }
    }
}
