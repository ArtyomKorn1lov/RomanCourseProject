using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class DetailService : IDetailService
    {
        private IDetailRepository _detailRepository;

        public DetailService(IDetailRepository detailRepository)
        {
            _detailRepository = detailRepository;
        }

        public async Task<bool> Create(Detail detail)
        {
            try
            {
                if(detail != null)
                    await _detailRepository.Create(detail);
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
                await _detailRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Detail>> GetAll()
        {
            try
            {
                return await _detailRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<Detail> GetById(int id)
        {
            try
            {
                return await _detailRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Detail detail)
        {
            try
            {
                await _detailRepository.Update(detail);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Detail>> GetByName(string name)
        {
            try
            {
                return await _detailRepository.GetByName($"%{name}%");
            }
            catch
            {
                return null;
            }
        }

        public async Task<Detail> CheckByArticle(int article)
        {
            try
            {
                return await _detailRepository.CheckByArticle(article);
            }
            catch
            {
                return null;
            }
        }
    }
}
