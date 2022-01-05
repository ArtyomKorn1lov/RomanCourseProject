import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../dto/detail';
import { CreateDetailDto } from '../dto/createDetailDto';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
  private commonUrl: string = 'api/detail';

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

  getDetails(): Observable<Detail[]>{
    return this.http.get<Detail[]>(`${this.commonUrl}/all`);
  }

  createDetail(detail: CreateDetailDto): Observable<object>{
    return this.http.post<Detail>(`${this.commonUrl}`, detail);
  }

  deleteDetail(id: number): Observable<object>{
    return this.http.delete<Detail>(`${this.commonUrl}/${id}`);
  }

  getDetailById(id: number): Observable<Detail>{
    return this.http.get<Detail>(`${this.commonUrl}/${id}`);
  }

  updateDetail(detail: Detail): Observable<object>{
    return this.http.put<Detail>(`${this.commonUrl}`, detail);
  }

  getByName(name: string): Observable<Detail[]>{
    return this.http.get<Detail[]>(`${this.commonUrl}/by-name/${name}`);
  }

  checkByArticle(article: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.commonUrl}/by-article/${article}`);
  }
}
