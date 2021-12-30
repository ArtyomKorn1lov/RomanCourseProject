using CourseProject.Entity;
using CourseProject.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IDeliveryService
    {
        Task<List<DeliveryInfoDto>> GetAll();
        Task<Delivery> GetById(int id);
        Task<bool> Create(Delivery delivery);
        Task<bool> Update(Delivery delivery);
        Task<bool> Delete(int id);
        Task<List<DeliveryInfoDto>> GetByDetailName(string name);
        Task<List<DeliveryInfoDto>> GetByProviderName(string name);
        Task<Delivery> CheckByDetailId(int id);
        Task<Delivery> CheckByProviderId(int id);
        Task<List<Delivery>> FindDeliveriesByDetailName(List<Detail> details);
        Task<List<Delivery>> FindDeliveriesByProviderName(List<Provider> providers);
        Task<List<DeliveryInfoDto>> CompareByDeliveryInfoDto(List<Delivery> deliveries);
    }
}
