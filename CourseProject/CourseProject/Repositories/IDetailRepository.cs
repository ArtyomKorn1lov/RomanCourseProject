using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public interface IDetailRepository
    {
        Task<List<Detail>> GetAll();
        Task<Detail> GetById(int id);
        Task Create(Detail detail);
        Task Update(Detail detail);
        Task Delete(int id);
        Task<List<Detail>> GetByName(string name);
        Task<Detail> CheckByArticle(int article);
    }
}
