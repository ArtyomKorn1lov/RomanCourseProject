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
    [Route("api/customer")]
    public class CustomerController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private ICustomerService _customerService;

        public CustomerController(IUnitOfWork unitOfWork, ICustomerService customerService)
        {
            _unitOfWork = unitOfWork;
            _customerService = customerService;
        }

        [HttpGet("all")]
        public async Task<List<CustomerDto>> GetAll()
        {
            List<Customer> customers = await _customerService.GetAll();
            if (customers == null)
            {
                return new List<CustomerDto>();
            }
            return customers.Select(d => CustomerDtoConverter.ConvertToCustomerDto(d)).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateDetail(CustomerDto customerDto)
        {
            if (await _customerService.Create(CustomerDtoConverter.CovertToCustomerEntity(customerDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            if (await _customerService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<CustomerDto> GetDetailById(int id)
        {
            Customer customer = await _customerService.GetById(id);
            if (customer == null)
            {
                return new CustomerDto();
            }
            return CustomerDtoConverter.ConvertToCustomerDto(customer);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDetail(CustomerDto customer)
        {
            if (await _customerService.Update(CustomerDtoConverter.CovertToCustomerEntity(customer)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-name/{name}")]
        public async Task<List<CustomerDto>> GetByName(string name)
        {
            List<Customer> customers = await _customerService.GetByName(name);
            if (customers == null)
            {
                return new List<CustomerDto>();
            }
            return customers.Select(d => CustomerDtoConverter.ConvertToCustomerDto(d)).ToList();
        }
    }
}
