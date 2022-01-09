using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RomanCourseProject.Converters;
using RomanCourseProject.Dto;
using RomanCourseProject.Entity;
using RomanCourseProject.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Controllers
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
        public List<DeliveryDto> GetAll()
        {
            List<Delivery> deliveries = _deliveryService.GetAll();
            if (deliveries == null)
            {
                return new List<DeliveryDto>();
            }
            return deliveries.Select(d => DeliveryDtoConverter.ConvertToDeliveryDto(d)).ToList();
        }

        [HttpPost]
        public IActionResult CreateDelivery(DeliveryDto deliveryDto)
        {
            if (_deliveryService.Create(DeliveryDtoConverter.ConvertToDeliveryEntity(deliveryDto)))
            {
                _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDelivery(int id)
        {
            if (_deliveryService.Delete(id))
            {
                _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public DeliveryDto GetDeliveryById(int id)
        {
            Delivery delivery = _deliveryService.GetById(id);
            if (delivery == null)
            {
                return new DeliveryDto();
            }
            return DeliveryDtoConverter.ConvertToDeliveryDto(delivery);
        }

        [HttpPut]
        public IActionResult UpdateDelivery(DeliveryDto delivery)
        {
            if (_deliveryService.Update(DeliveryDtoConverter.ConvertToDeliveryEntity(delivery)))
            {
                _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-price/{price}")]
        public List<DeliveryDto> GetByPrice(int price)
        {
            List<Delivery> deliveries = _deliveryService.GetByPrice(price);
            if (deliveries == null)
            {
                return new List<DeliveryDto>();
            }
            return deliveries.Select(d => DeliveryDtoConverter.ConvertToDeliveryDto(d)).ToList();
        }
    }
}
