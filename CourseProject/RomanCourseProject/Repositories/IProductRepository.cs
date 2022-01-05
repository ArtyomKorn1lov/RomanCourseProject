using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAll();
        Task<Product> GetById(int id);
        Task Create(Product product);
        Task Update(Product product);
        Task Delete(int id);
        Task<List<Product>> GetByName(string name);
    }
}
