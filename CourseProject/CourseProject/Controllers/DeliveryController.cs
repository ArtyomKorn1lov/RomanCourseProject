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
    [Route("api/delivery")]
    public class DeliveryController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IDeliveryService _deliveryService;

        public DeliveryController(IUnitOfWork unitOfWork, IDeliveryService deliveryService)
        {
            _unitOfWork = unitOfWork;
            _deliveryService = deliveryService;
        }

        [HttpGet("all")]
        public async Task<List<DeliveryInfoDto>> GetAll()
        {
            List<DeliveryInfoDto> deliveries = await _deliveryService.GetAll();
            if (deliveries == null)
            {
                return new List<DeliveryInfoDto>();
            }
            return deliveries;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDelivery(DeliveryDto deliveryDto)
        {
            if (await _deliveryService.Create(DeliveryDtoConverter.CovertToDeliveryEntity(deliveryDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDelivery(int id)
        {
            if (await _deliveryService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<DeliveryDto> GetDeliveryById(int id)
        {
            Delivery delivery = await _deliveryService.GetById(id);
            if (delivery == null)
            {
                return new DeliveryDto();
            }
            return DeliveryDtoConverter.ConvertToDeliveryDto(delivery);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDelivery(DeliveryDto delivery)
        {
            if (await _deliveryService.Update(DeliveryDtoConverter.CovertToDeliveryEntity(delivery)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-detail-name/{name}")]
        public async Task<List<DeliveryInfoDto>> GetByDetailName(string name)
        {
            List<DeliveryInfoDto> deliveryInfoDtos = await _deliveryService.GetByDetailName(name);
            if(deliveryInfoDtos == null)
            {
                return null;
            }
            return deliveryInfoDtos;
        }

        [HttpGet("by-provider-name/{name}")]
        public async Task<List<DeliveryInfoDto>> GetByProviderName(string name)
        {
            List<DeliveryInfoDto> deliveryInfoDtos = await _deliveryService.GetByProviderName(name);
            if(deliveryInfoDtos == null)
            {
                return null;
            }
            return deliveryInfoDtos;
        }

        [HttpGet("by-detail-id/{id}")]
        public async Task<DeliveryDto> GetByDetailId(int id)
        {
            Delivery delivery = await _deliveryService.CheckByDetailId(id);
            if (delivery == null)
            {
                return null;
            }
            return DeliveryDtoConverter.ConvertToDeliveryDto(delivery);
        }

        [HttpGet("by-provider-id/{id}")]
        public async Task<DeliveryDto> GetByProviderId(int id)
        {
            Delivery delivery = await _deliveryService.CheckByProviderId(id);
            if (delivery == null)
            {
                return null;
            }
            return DeliveryDtoConverter.ConvertToDeliveryDto(delivery);
        }
    }
}
