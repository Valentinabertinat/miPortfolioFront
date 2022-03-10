import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
 private apiUrl = './assets/data/data.json'
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  deleteItem(education: any): Observable<any> {
    const url = `${this.apiUrl}/${education.id}`
    return this.http.delete<any>(url)
  }
}
