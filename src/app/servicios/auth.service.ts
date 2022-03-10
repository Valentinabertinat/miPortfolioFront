import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://localhost:3000/api';
  token: any;
  

  constructor(private http: HttpClient, private router:Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password})
    .subscribe((resp: any)=> {
      //redireccionamos al usuario a su perfil 
      this.router.navigate(['home'])
      //guardamos el token en el storage
      localStorage.setItem('auth_token', resp.token)
    })
  };
  //para cerrar sesion borramos el token del storage
  logout(){
   localStorage.removeItem('token');
  }

  //un servicio para verificar que existe la sesion
  public get logIn(): boolean{
   return (localStorage.getItem('token') !== null);
  }
}
