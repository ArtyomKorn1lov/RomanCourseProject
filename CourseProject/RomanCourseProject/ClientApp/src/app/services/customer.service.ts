import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../dto/customer';
import { CreateCustomerDto } from '../dto/CreateCustomerDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private commonUrl: string = 'api/provider';
  private id: number = 0;

  constructor(private http: HttpClient) { }

  public pushInService(id: number): void {
    sessionStorage.setItem('ProviderKey', id.toString());
  }

  public getFromService(): number {
    var key = sessionStorage.getItem('ProviderKey');
    if(key == null)
    {
      return 0;
    }
    var currentId = parseInt(key);
    return currentId;
  }

  getProviders(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.commonUrl}/all`);
  }

  createProvider(provider: CreateCustomerDto): Observable<object>{
    return this.http.post<Customer>(`${this.commonUrl}`, provider);
  }

  deleteProvider(id: number): Observable<object>{
    return this.http.delete<Customer>(`${this.commonUrl}/${id}`);
  }

  getProviderById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.commonUrl}/${id}`);
  }

  updateProvider(provider: Customer): Observable<object>{
    return this.http.put<Customer>(`${this.commonUrl}`, provider);
  }

  getByName(name: string): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.commonUrl}/by-name/${name}`);
  }
}
