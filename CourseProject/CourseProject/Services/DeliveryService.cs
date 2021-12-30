using CourseProject.Entity;
using CourseProject.Dto;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class DeliveryService : IDeliveryService
    {
        private IDeliveryRepository _deliveryRepository;
        private IDetailService _detailService;
        private IProviderService _providerService;

        public DeliveryService(IDeliveryRepository deliveryRepository, IDetailService detailService, IProviderService providerService)
        {
            _deliveryRepository = deliveryRepository;
            _detailService = detailService;
            _providerService = providerService;
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

        public async Task<List<DeliveryInfoDto>> GetAll()
        {
            try
            {
                List<Delivery> deliveries = await _deliveryRepository.GetAll();
                return await CompareByDeliveryInfoDto(deliveries);
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

        public async Task<List<DeliveryInfoDto>> GetByDetailName(string name)
        {
            try
            {
                List<Detail> details = await _detailService.GetByName(name);
                List<Delivery> deliveries = await FindDeliveriesByDetailName(details);
                return await CompareByDeliveryInfoDto(deliveries);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<DeliveryInfoDto>> GetByProviderName(string name)
        {
            try
            {
                List<Provider> providers = await _providerService.GetByName(name);
                List<Delivery> deliveries = await FindDeliveriesByProviderName(providers);
                return await CompareByDeliveryInfoDto(deliveries);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Delivery> CheckByDetailId(int id)
        {
            try
            {
                return await _deliveryRepository.CheckByDetailId(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Delivery> CheckByProviderId(int id)
        {
            try
            {
                return await _deliveryRepository.CheckByProviderId(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<Delivery>> FindDeliveriesByDetailName(List<Detail> details)
        {
            List<List<Delivery>> deliveries = new List<List<Delivery>>();
            for(int count = 0; count < details.Count; count++)
            {
                deliveries.Add(await _deliveryRepository.GetByDetailName(details[count].Id));
            }
            List<Delivery> deliveriesOut = new List<Delivery>();
            for(int countMatrix = 0; countMatrix < deliveries.Count; countMatrix++)
            {
                for(int countList = 0; countList < deliveries[countMatrix].Count; countList++)
                {
                    deliveriesOut.Add(deliveries[countMatrix][countList]);
                }
            }
            return deliveriesOut;
        }

        public async Task<List<Delivery>> FindDeliveriesByProviderName(List<Provider> providers)
        {
            List<List<Delivery>> deliveries = new List<List<Delivery>>();
            for (int count = 0; count < providers.Count; count++)
            {
                deliveries.Add(await _deliveryRepository.GetByProviderName(providers[count].Id));
            }
            List<Delivery> deliveriesOut = new List<Delivery>();
            for (int countMatrix = 0; countMatrix < deliveries.Count; countMatrix++)
            {
                for (int countList = 0; countList < deliveries[countMatrix].Count; countList++)
                {
                    deliveriesOut.Add(deliveries[countMatrix][countList]);
                }
            }
            return deliveriesOut;
        }

        public async Task<List<DeliveryInfoDto>> CompareByDeliveryInfoDto(List<Delivery> deliveries)
        {
            List<DeliveryInfoDto> deliveryInfoDtos = new List<DeliveryInfoDto>();
            Detail detail = new Detail();
            Provider provider = new Provider();
            for(int count = 0; count < deliveries.Count; count++)
            {
                detail = await _detailService.GetById(deliveries[count].DetailId);
                provider = await _providerService.GetById(deliveries[count].ProviderId);
                deliveryInfoDtos.Add(new DeliveryInfoDto(
                    deliveries[count].Id,
                    deliveries[count].DetailId,
                    deliveries[count].ProviderId,
                    detail.Name,
                    provider.Name,
                    deliveries[count].Count,
                    deliveries[count].Date,
                    deliveries[count].Price));
            }
            return deliveryInfoDtos;
        }
    }
}
