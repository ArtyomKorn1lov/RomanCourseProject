using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IProviderService
    {
        Task<List<Provider>> GetAll();
        Task<Provider> GetById(int id);
        Task<bool> Create(Provider provider);
        Task<bool> Update(Provider provider);
        Task<bool> Delete(int id);
        Task<List<Provider>> GetByName(string name);

    }
}
