import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../api/apis';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private api: APIs) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.api.APIs}${url}`);
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(`${this.api.APIs}${url}`, body, httpOptions);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.post(`${this.api.APIs}${url}`, body, httpOptions);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.api.APIs}${url}`);
  }
}
