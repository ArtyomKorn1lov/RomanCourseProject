using RomanCourseProject.Entity;
using RomanCourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;

        public ProductService(IProductRepository detailRepository)
        {
            _productRepository = detailRepository;
        }

        public async Task<bool> Create(Product product)
        {
            try
            {
                if(product != null)
                    await _productRepository.Create(product);
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
                await _productRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Product>> GetAll()
        {
            try
            {
                return await _productRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<Product> GetById(int id)
        {
            try
            {
                return await _productRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Product product)
        {
            try
            {
                await _productRepository.Update(product);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Product>> GetByName(string name)
        {
            try
            {
                return await _productRepository.GetByName($"%{name}%");
            }
            catch
            {
                return null;
            }
        }
    }
}
