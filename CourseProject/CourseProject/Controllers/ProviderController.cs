using CourseProject.Converters;
using CourseProject.Dto;
using CourseProject.Entity;
using CourseProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Controllers
{
    [ApiController]
    [Route("api/provider")]
    public class ProviderController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IProviderService _providerService;

        public ProviderController(IUnitOfWork unitOfWork, IProviderService providerService)
        {
            _unitOfWork = unitOfWork;
            _providerService = providerService;
        }

        [HttpGet("all")]
        public async Task<List<ProviderDto>> GetAll()
        {
            List<Provider> providers = await _providerService.GetAll();
            if (providers == null)
            {
                return new List<ProviderDto>();
            }
            return providers.Select(d => ProviderDtoConverter.ConvertToProviderDto(d)).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateDetail(ProviderDto providerDto)
        {
            if (await _providerService.Create(ProviderDtoConverter.CovertToProviderEntity(providerDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            if (await _providerService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<ProviderDto> GetDetailById(int id)
        {
            Provider provider = await _providerService.GetById(id);
            if (provider == null)
            {
                return new ProviderDto();
            }
            return ProviderDtoConverter.ConvertToProviderDto(provider);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDetail(ProviderDto provider)
        {
            if (await _providerService.Update(ProviderDtoConverter.CovertToProviderEntity(provider)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-name/{name}")]
        public async Task<List<ProviderDto>> GetByName(string name)
        {
            List<Provider> providers = await _providerService.GetByName(name);
            if (providers == null)
            {
                return new List<ProviderDto>();
            }
            return providers.Select(d => ProviderDtoConverter.ConvertToProviderDto(d)).ToList();
        }
    }
}
