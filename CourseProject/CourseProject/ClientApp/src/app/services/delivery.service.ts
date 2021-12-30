import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../dto/delivery';
import { CreateDeliveryDto } from '../dto/CreateDeliveryDto';
import { DeliveryDtoInfo } from '../dto/DeliveryInfoDto';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private commonUrl: string = 'api/delivery';

  constructor(private http: HttpClient) { }

  public clearSessionStorage(): void{
    sessionStorage.setItem('DeliveryCreateDetailKey', '');
    sessionStorage.setItem('DeliveryCreateProviderKey', '');
    sessionStorage.setItem('DeliveryIdKey', '');
    sessionStorage.setItem('DeliveryDetailIdKey', '');
    sessionStorage.setItem('DeliveryProviderIdKey', '');
    sessionStorage.setItem('DeliveryPage', '');
  }

  public pushInService(id: number, providerId: number , detailId: number): void {
    sessionStorage.setItem('DeliveryIdKey', id.toString());
    sessionStorage.setItem('DeliveryDetailIdKey', detailId.toString());
    sessionStorage.setItem('DeliveryProviderIdKey', providerId.toString());
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

  getDeliveries(): Observable<DeliveryDtoInfo[]>{
    return this.http.get<DeliveryDtoInfo[]>(`${this.commonUrl}/all`);
  }

  createDelivery(delivery: CreateDeliveryDto): Observable<object>{
    return this.http.post<Delivery>(`${this.commonUrl}`, delivery);
  }

  deleteDelivery(id: number): Observable<object>{
    return this.http.delete<Delivery>(`${this.commonUrl}/${id}`);
  }

  getDeliveryById(id: number): Observable<Delivery>{
    return this.http.get<Delivery>(`${this.commonUrl}/${id}`);
  }

  updateDelivery(delivery: Delivery): Observable<object>{
    return this.http.put<Delivery>(`${this.commonUrl}`, delivery);
  }

  getByDetailName(name: string): Observable<DeliveryDtoInfo[]> {
    return this.http.get<DeliveryDtoInfo[]>(`${this.commonUrl}/by-detail-name/${name}`);
  }

  getByProviderName(name: string): Observable<DeliveryDtoInfo[]> {
    return this.http.get<DeliveryDtoInfo[]>(`${this.commonUrl}/by-provider-name/${name}`);
  }

  checkByDetailId(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.commonUrl}/by-detail-id/${id}`);
  }

  checkByProviderId(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.commonUrl}/by-provider-id/${id}`);
  }
}
