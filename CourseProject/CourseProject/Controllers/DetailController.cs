using CourseProject.Converters;
using CourseProject.Dto;
using CourseProject.Entity;
using CourseProject.Repositories;
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
    [Route("api/detail")]
    public class DetailController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IDetailService _detailService;

        public DetailController(IUnitOfWork unitOfWork, IDetailService detailService)
        {
            _unitOfWork = unitOfWork;
            _detailService = detailService;
        }

        [HttpGet("all")]
        public async Task<List<DetailDto>> GetAll()
        {
            List<Detail> details = await _detailService.GetAll();
            if (details == null)
            {
                return new List<DetailDto>();
            }
            return details.Select(d => DetailDtoConverter.ConvertToDetailDto(d)).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateDetail(DetailDto detailDto)
        {
            if (await _detailService.Create(DetailDtoConverter.CovertToDetailEntity(detailDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            if (await _detailService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<DetailDto> GetDetailById(int id)
        {
            Detail detail = await _detailService.GetById(id);
            if(detail == null)
            {
                return new DetailDto();
            }
            return DetailDtoConverter.ConvertToDetailDto(detail);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDetail(DetailDto detail)
        {
            if (await _detailService.Update(DetailDtoConverter.CovertToDetailEntity(detail)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-name/{name}")]
        public async Task<List<DetailDto>> GetByName(string name)
        {
            List<Detail> details = await _detailService.GetByName(name);
            if (details == null)
            {
                return new List<DetailDto>();
            }
            return details.Select(d => DetailDtoConverter.ConvertToDetailDto(d)).ToList();
        }

        [HttpGet("by-article/{article}")]
        public async Task<DetailDto> GetByArticle(int article)
        {
            Detail detail = await _detailService.CheckByArticle(article);
            if(detail == null)
            {
                return null;
            }
            return DetailDtoConverter.ConvertToDetailDto(detail);
        }
    }
}
