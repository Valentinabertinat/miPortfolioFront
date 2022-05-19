import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyecto[] = [];
  public editProyecto: Proyecto | undefined;
  public deleteProyecto: Proyecto | undefined;

  roles: string[] = [];
  isAdmin = false;

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public getProyectos(): void {
    this.proyectoService.getProyectos().subscribe(
      (response: Proyecto[]) => {
        this.proyectos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProyecto(addForm: NgForm): void {
    document.getElementById('add-habilidad-form')?.click();
    this.proyectoService.addProyecto(addForm.value).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProyecto(proyecto: Proyecto): void {
    this.proyectoService.updateProyecto(proyecto).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProyecto(proyectoId: number): void {
    this.proyectoService.deleteProyecto(proyectoId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProyectos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(mode: String, proyecto?: Proyecto): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#updateProyectoModal');
    }
    if (mode === 'delete'){
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    }
    if (mode === 'add'){
      button.setAttribute('data-target', '#addProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
