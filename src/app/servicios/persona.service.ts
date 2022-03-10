import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { 
    console.log("El Servicio de Portfolio está corriendo");
  }

  obtenerDatosPersona():Observable<any>{
   return this.http.get('./assets/data/persona.json');
  }

  guardarDatosPersona(persona:Persona):Observable<any>{
    return this.http.post('http://localhost:3000/posts',persona);
  }
}