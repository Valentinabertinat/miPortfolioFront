import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../componentes/proyectos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServeUrl}/proyecto/all`);
  }

  public addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServeUrl}/proyecto/add`, proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiServeUrl}/proyecto/update`, proyecto);
  }

  public deleteProyecto(proyectoId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/proyecto/delete/${proyectoId}`);
  }
}
