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

        public bool Create(Delivery delivery)
        {
            try
            {
                if (delivery != null)
                    _deliveryRepository.Create(delivery);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                _deliveryRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Delivery> GetAll()
        {
            try
            {
                return _deliveryRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public Delivery GetById(int id)
        {
            try
            {
                return _deliveryRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public List<Delivery> GetByPrice(int price)
        {
            try
            {
                return _deliveryRepository.GetByPrice(price);
            }
            catch
            {
                return null;
            }
        }

        public bool Update(Delivery delivery)
        {
            try
            {
                _deliveryRepository.Update(delivery);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
