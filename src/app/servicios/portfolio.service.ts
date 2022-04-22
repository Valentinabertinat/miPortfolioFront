import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
 private apiUrl = './assets/data/data.json'
  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  
}
