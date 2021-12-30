using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IDetailService
    {
        Task<List<Detail>> GetAll();
        Task<Detail> GetById(int id);
        Task<bool> Create(Detail detail);
        Task<bool> Update(Detail detail);
        Task<bool> Delete(int id);
        Task<List<Detail>> GetByName(string name);
        Task<Detail> CheckByArticle(int article);
    }
}
