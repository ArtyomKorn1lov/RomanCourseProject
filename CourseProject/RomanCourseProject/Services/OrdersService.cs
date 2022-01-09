using RomanCourseProject.Entity;
using RomanCourseProject.Dto;
using RomanCourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public class OrdersService : IOrdersService
    {
        private IOrdersRepository _orderRepository;
        private IProductService _productService;
        private ICustomerService _customerService;

        public OrdersService(IOrdersRepository orderRepository, IProductService productService, ICustomerService customerService)
        {
            _orderRepository = orderRepository;
            _productService = productService;
            _customerService = customerService;
        }

        public async Task<bool> Create(Orders order)
        {
            try 
            {
                if (order != null)
                    await _orderRepository.Create(order);
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
                await _orderRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<OrdersInfoDto>> GetAll()
        {
            try
            {
                List<Orders> orders = await _orderRepository.GetAll();
                return await CompareByOrdersInfoDto(orders);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Orders> GetById(int id)
        {
            try
            {
                return await _orderRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Orders order)
        {
            try
            {
                await _orderRepository.Update(order);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<OrdersInfoDto>> GetByProductName(string name)
        {
            try
            {
                List<Product> products = await _productService.GetByName(name);
                List<Orders> orders = await FindOrdersByProductName(products);
                return await CompareByOrdersInfoDto(orders);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<OrdersInfoDto>> GetByCustomerName(string name)
        {
            try
            {
                List<Customer> customers = await _customerService.GetByName(name);
                List<Orders> orders = await FindOrdersByCustomersName(customers);
                return await CompareByOrdersInfoDto(orders);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Orders> CheckByProductId(int id)
        {
            try
            {
                return await _orderRepository.CheckByProductId(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Orders> CheckByCustomerId(int id)
        {
            try
            {
                return await _orderRepository.CheckByCustomerId(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Orders> CheckByDeliveryId(int id)
        {
            try
            {
                return await _orderRepository.CheckByDeliveryId(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<Orders>> FindOrdersByProductName(List<Product> products)
        {
            List<List<Orders>> orders = new List<List<Orders>>();
            for(int count = 0; count < products.Count; count++)
            {
                orders.Add(await _orderRepository.GetByProductName(products[count].Id));
            }
            List<Orders> ordersOut = new List<Orders>();
            for(int countMatrix = 0; countMatrix < orders.Count; countMatrix++)
            {
                for(int countList = 0; countList < orders[countMatrix].Count; countList++)
                {
                    ordersOut.Add(orders[countMatrix][countList]);
                }
            }
            return ordersOut;
        }

        public async Task<List<Orders>> FindOrdersByCustomersName(List<Customer> customers)
        {
            List<List<Orders>> orders = new List<List<Orders>>();
            for (int count = 0; count < customers.Count; count++)
            {
                orders.Add(await _orderRepository.GetByCustomerName(customers[count].Id));
            }
            List<Orders> ordersOut = new List<Orders>();
            for (int countMatrix = 0; countMatrix < orders.Count; countMatrix++)
            {
                for (int countList = 0; countList < orders[countMatrix].Count; countList++)
                {
                    ordersOut.Add(orders[countMatrix][countList]);
                }
            }
            return ordersOut;
        }

        public async Task<List<OrdersInfoDto>> CompareByOrdersInfoDto(List<Orders> orders)
        {
            List<OrdersInfoDto> orderInfoDtos = new List<OrdersInfoDto>();
            Product product = new Product();
            Customer customer = new Customer();
            for(int count = 0; count < orders.Count; count++)
            {
                product = await _productService.GetById(orders[count].ProductId);
                customer = await _customerService.GetById(orders[count].CustomerId);
                orderInfoDtos.Add(new OrdersInfoDto(
                    orders[count].Id,
                    orders[count].ProductId,
                    orders[count].CustomerId,
                    product.Name,
                    customer.Name,
                    orders[count].Count,
                    orders[count].Date,
                    orders[count].DeliveryId,
                    orders[count].Price));
            }
            return orderInfoDtos;
        }
    }
}
