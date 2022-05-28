import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthService } from './servicios/auth.service';
import { AdminComponent } from './componentes/admin/admin.component';

const routes: Routes = [
  {path: 'barra', component:NavbarComponent},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'sobreMi', component:SobreMiComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'habilidades', component:HabilidadesComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:HomeComponent},
  { path: 'admin', component: AdminComponent }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [AuthService]
  
})
export class AppRoutingModule { }
