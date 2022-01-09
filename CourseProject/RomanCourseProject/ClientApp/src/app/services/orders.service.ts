import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../dto/orders';
import { CreateOrdersDto } from '../dto/CreateOrdersDto';
import { OrdersDtoInfo } from '../dto/OrdersInfoDto';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private commonUrl: string = 'api/orders';

  constructor(private http: HttpClient) { }

  public clearSessionStorage(): void{
    sessionStorage.setItem('DeliveryCreateDetailKey', '');
    sessionStorage.setItem('DeliveryCreateProviderKey', '');
    sessionStorage.setItem('DeliveryCreateSupplyKey', '');
    sessionStorage.setItem('DeliveryIdKey', '');
    sessionStorage.setItem('DeliveryDetailIdKey', '');
    sessionStorage.setItem('DeliveryProviderIdKey', '');
    sessionStorage.setItem('DeliverySupplyIdKey', '');
    sessionStorage.setItem('DeliveryPage', '');
  }

  public pushInService(id: number, providerId: number , detailId: number, supplyId: number): void {
    sessionStorage.setItem('DeliveryIdKey', id.toString());
    sessionStorage.setItem('DeliveryDetailIdKey', detailId.toString());
    sessionStorage.setItem('DeliveryProviderIdKey', providerId.toString());
    sessionStorage.setItem('DeliverySupplyIdKey', supplyId.toString());
  }

  public getDeliverySupplyIdFromService(): number {
    var currentKey = sessionStorage.getItem('DeliverySupplyIdKey');
    if(currentKey == null)
    {
      return -1;
    }
    var currentId = parseInt(currentKey);
    return currentId;
  }

  public getDeliveryIdFromService(): number {
    var currentKey = sessionStorage.getItem('DeliveryIdKey');
    if(currentKey == null)
    {
      return -1;
    }
    var currentId = parseInt(currentKey);
    return currentId;
  }

  public getDeliveryProviderIdFromService(): number {
    var currentKey = sessionStorage.getItem('DeliveryProviderIdKey');
    if(currentKey == null)
    {
      return -1;
    }
    var currentId = parseInt(currentKey);
    return currentId;
  }

  public getDeliveryDetailIdFromService(): number {
    var currentKey = sessionStorage.getItem('DeliveryDetailIdKey');
    if(currentKey == null)
    {
      return -1;
    }
    var currentId = parseInt(currentKey);
    return currentId;
  }

  public pushChoiseDetailId(id: number): void{
    sessionStorage.setItem('DeliveryCreateDetailKey', id.toString());
  }

  public getChoiseDetailId(): number{
    var detailKey = sessionStorage.getItem('DeliveryCreateDetailKey');
    if(detailKey == null || detailKey == '')
    {
      return -1;
    }
    var currentDetailId = parseInt(detailKey);
    return currentDetailId; 
  }

  public pushChoiseProviderId(id: number): void{
    sessionStorage.setItem('DeliveryCreateProviderKey', id.toString());
  }

  public getChoiseProviderId(): number{
    var providerKey = sessionStorage.getItem('DeliveryCreateProviderKey');
    if(providerKey == null || providerKey == '')
    {
      return -1;
    }
    var currentProviderId = parseInt(providerKey);
    return currentProviderId;
  }

  public pushChoiseSupplyId(id: number): void{
    sessionStorage.setItem('DeliveryCreateSupplyKey', id.toString());
  }

  public getChoiseSupplyId(): number{
    var supplyKey = sessionStorage.getItem('DeliveryCreateSupplyKey');
    if(supplyKey == null || supplyKey == '')
    {
      return -1;
    }
    var currentSupplyId = parseInt(supplyKey);
    return currentSupplyId;
  }

  getDeliveries(): Observable<OrdersDtoInfo[]>{
    return this.http.get<OrdersDtoInfo[]>(`${this.commonUrl}/all`);
  }

  createDelivery(delivery: CreateOrdersDto): Observable<object>{
    return this.http.post<Orders>(`${this.commonUrl}`, delivery);
  }

  deleteDelivery(id: number): Observable<object>{
    return this.http.delete<Orders>(`${this.commonUrl}/${id}`);
  }

  getDeliveryById(id: number): Observable<Orders>{
    return this.http.get<Orders>(`${this.commonUrl}/${id}`);
  }

  updateDelivery(delivery: Orders): Observable<object>{
    return this.http.put<Orders>(`${this.commonUrl}`, delivery);
  }

  getByDetailName(name: string): Observable<OrdersDtoInfo[]> {
    return this.http.get<OrdersDtoInfo[]>(`${this.commonUrl}/by-product-name/${name}`);
  }

  getByProviderName(name: string): Observable<OrdersDtoInfo[]> {
    return this.http.get<OrdersDtoInfo[]>(`${this.commonUrl}/by-customer-name/${name}`);
  }

  checkByDetailId(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.commonUrl}/by-product-id/${id}`);
  }

  checkByProviderId(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.commonUrl}/by-customer-id/${id}`);
  }

  checkBySupplyId(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.commonUrl}/by-delivery-id/${id}`);
  }
}
