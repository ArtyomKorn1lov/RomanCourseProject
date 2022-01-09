import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../dto/delivery';
import { CreateDeliveryDto } from '../dto/CreateDeliveryDto';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private commonUrl: string = 'api/delivery';

  constructor(private http: HttpClient) { }

  public pushInService(id: number): void {
    sessionStorage.setItem('SupplyKey', id.toString());
  }

  public getFromService(): number {
    var key = sessionStorage.getItem('SupplyKey');
    if(key == null)
    {
      return 0;
    }
    var currentId = parseInt(key);
    return currentId;
  }

  getSupplies(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(`${this.commonUrl}/all`);
  }

  createSupply(supply: CreateDeliveryDto): Observable<object>{
    return this.http.post<Delivery>(`${this.commonUrl}`, supply);
  }

  deleteSupply(id: number): Observable<object>{
    return this.http.delete<Delivery>(`${this.commonUrl}/${id}`);
  }

  getSupplyById(id: number): Observable<Delivery>{
    return this.http.get<Delivery>(`${this.commonUrl}/${id}`);
  }

  updateSupply(supply: Delivery): Observable<object>{
    return this.http.put<Delivery>(`${this.commonUrl}`, supply);
  }

  getByPrice(price: number): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(`${this.commonUrl}/by-price/${price}`);
  }
}
