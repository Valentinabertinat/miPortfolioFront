import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServeUrl}/persona/all`);
  }

  public addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServeUrl}/persona/add`, persona);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServeUrl}/persona/update`, persona);
  }

  public deletePersona(personaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/persona/delete/${personaId}`);
  }

}