import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../componentes/educacion/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServeUrl}/educacion/all`);
  }

  public addEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiServeUrl}/educacion/add`, educacion);
  }

  public updateEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiServeUrl}/educacion/update`, educacion);
  }

  public deleteEducacion(educacionId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/educacion/delete/${educacionId}`);
  }
}
