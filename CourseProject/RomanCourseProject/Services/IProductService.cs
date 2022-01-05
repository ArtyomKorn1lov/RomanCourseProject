using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public interface IProductService
    {
        Task<List<Product>> GetAll();
        Task<Product> GetById(int id);
        Task<bool> Create(Product product);
        Task<bool> Update(Product product);
        Task<bool> Delete(int id);
        Task<List<Product>> GetByName(string name);
    }
}
