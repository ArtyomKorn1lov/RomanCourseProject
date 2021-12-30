using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class ProviderService : IProviderService
    {
        private IProviderRepository _providerRepository;

        public ProviderService(IProviderRepository providerRepository)
        {
            _providerRepository = providerRepository;
        }

        public async Task<bool> Create(Provider provider)
        {
            try
            {
                if(provider != null)
                {
                    await _providerRepository.Create(provider);
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
                await _providerRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Provider>> GetAll()
        {
            try
            {
                return await _providerRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<Provider> GetById(int id)
        {
            try
            {
                return await _providerRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Provider provider)
        {
            try
            {
                await _providerRepository.Update(provider);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Provider>> GetByName(string name)
        {
            try
            {
                return await _providerRepository.GetByName($"%{name}%");
            }
            catch
            {
                return null;
            }
        }
    }
}
