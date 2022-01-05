using RomanCourseProject.Entity;
using RomanCourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Services
{
    public class DeliveryService : IDeliveryService
    {
        private IDeliveryRepository _deliveryRepository;

        public DeliveryService(IDeliveryRepository deliveryRepository)
        {
            _deliveryRepository = deliveryRepository;
        }

        public async Task<bool> Create(Delivery delivery)
        {
            try
            {
                if (delivery != null)
                    await _deliveryRepository.Create(delivery);
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
                await _deliveryRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Delivery>> GetAll()
        {
            try
            {
                return await _deliveryRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<Delivery> GetById(int id)
        {
            try
            {
                return await _deliveryRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<Delivery>> GetByPrice(int price)
        {
            try
            {
                return await _deliveryRepository.GetByPrice(price);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Update(Delivery delivery)
        {
            try
            {
                await _deliveryRepository.Update(delivery);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
