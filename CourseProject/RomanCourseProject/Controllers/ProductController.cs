using RomanCourseProject.Converters;
using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using RomanCourseProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IProductService _productService;

        public ProductController(IUnitOfWork unitOfWork, IProductService productService)
        {
            _unitOfWork = unitOfWork;
            _productService = productService;
        }

        [HttpGet("all")]
        public async Task<List<ProductDto>> GetAll()
        {
            List<Product> products = await _productService.GetAll();
            if (products == null)
            {
                return new List<ProductDto>();
            }
            return products.Select(d => ProductDtoConverter.ConvertToProductDto(d)).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateDetail(ProductDto productDto)
        {
            if (await _productService.Create(ProductDtoConverter.CovertToProductEntity(productDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            if (await _productService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<ProductDto> GetDetailById(int id)
        {
            Product product = await _productService.GetById(id);
            if(product == null)
            {
                return new ProductDto();
            }
            return ProductDtoConverter.ConvertToProductDto(product);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDetail(ProductDto product)
        {
            if (await _productService.Update(ProductDtoConverter.CovertToProductEntity(product)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-name/{name}")]
        public async Task<List<ProductDto>> GetByName(string name)
        {
            List<Product> products = await _productService.GetByName(name);
            if (products == null)
            {
                return new List<ProductDto>();
            }
            return products.Select(d => ProductDtoConverter.ConvertToProductDto(d)).ToList();
        }
    }
}
