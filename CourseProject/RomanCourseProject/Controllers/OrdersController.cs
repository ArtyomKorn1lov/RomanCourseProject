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
    [Route("api/orders")]
    public class OrdersController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IOrdersService _ordersService;

        public OrdersController(IUnitOfWork unitOfWork, IOrdersService ordersService)
        {
            _unitOfWork = unitOfWork;
            _ordersService = ordersService;
        }

        [HttpGet("all")]
        public async Task<List<OrdersInfoDto>> GetAll()
        {
            List<OrdersInfoDto> orders = await _ordersService.GetAll();
            if (orders == null)
            {
                return new List<OrdersInfoDto>();
            }
            return orders;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDelivery(OrdersDto orderDto)
        {
            if (await _ordersService.Create(OrdersDtoConverter.CovertToDeliveryEntity(orderDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDelivery(int id)
        {
            if (await _ordersService.Delete(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<OrdersDto> GetDeliveryById(int id)
        {
            Orders order = await _ordersService.GetById(id);
            if (order == null)
            {
                return new OrdersDto();
            }
            return OrdersDtoConverter.ConvertToOrdersDto(order);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDelivery(OrdersDto orders)
        {
            if (await _ordersService.Update(OrdersDtoConverter.CovertToDeliveryEntity(orders)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-product-name/{name}")]
        public async Task<List<OrdersInfoDto>> GetByProductName(string name)
        {
            List<OrdersInfoDto> orderInfoDtos = await _ordersService.GetByProductName(name);
            if(orderInfoDtos == null)
            {
                return null;
            }
            return orderInfoDtos;
        }

        [HttpGet("by-customer-name/{name}")]
        public async Task<List<OrdersInfoDto>> GetByCustomerName(string name)
        {
            List<OrdersInfoDto> orderInfoDtos = await _ordersService.GetByCustomerName(name);
            if(orderInfoDtos == null)
            {
                return null;
            }
            return orderInfoDtos;
        }

        [HttpGet("by-product-id/{id}")]
        public async Task<OrdersDto> GetByProductId(int id)
        {
            Orders order = await _ordersService.CheckByProductId(id);
            if (order == null)
            {
                return null;
            }
            return OrdersDtoConverter.ConvertToOrdersDto(order);
        }

        [HttpGet("by-customer-id/{id}")]
        public async Task<OrdersDto> GetByCustomerId(int id)
        {
            Orders order = await _ordersService.CheckByCustomerId(id);
            if (order == null)
            {
                return null;
            }
            return OrdersDtoConverter.ConvertToOrdersDto(order);
        }
    }
}
