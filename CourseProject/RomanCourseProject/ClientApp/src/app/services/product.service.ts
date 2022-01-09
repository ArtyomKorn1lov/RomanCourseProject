import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../dto/product';
import { CreateProductDto } from '../dto/createProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private commonUrl: string = 'api/product';

  constructor(private http: HttpClient) { }

  public pushInService(id: number): void {
    sessionStorage.setItem('DetailKey', id.toString());
  }

  public getFromService(): number {
    var key = sessionStorage.getItem('DetailKey');
    if(key == null)
    {
      return 0;
    }
    var currentId = parseInt(key);
    return currentId;
  }

  getDetails(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.commonUrl}/all`);
  }

  createDetail(detail: CreateProductDto): Observable<object>{
    return this.http.post<Product>(`${this.commonUrl}`, detail);
  }

  deleteDetail(id: number): Observable<object>{
    return this.http.delete<Product>(`${this.commonUrl}/${id}`);
  }

  getDetailById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.commonUrl}/${id}`);
  }

  updateDetail(detail: Product): Observable<object>{
    return this.http.put<Product>(`${this.commonUrl}`, detail);
  }

  getByName(name: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.commonUrl}/by-name/${name}`);
  }
}
