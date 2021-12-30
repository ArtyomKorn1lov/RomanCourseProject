using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public interface IProviderRepository
    {
        Task<List<Provider>> GetAll();
        Task<Provider> GetById(int id);
        Task Create(Provider provider);
        Task Update(Provider provider);
        Task Delete(int id);
        Task<List<Provider>> GetByName(string name);
    }
}
