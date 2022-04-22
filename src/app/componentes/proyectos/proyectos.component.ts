import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyecto[] = [];
  public editProyecto!: Proyecto;
  public deleteProyecto!: Proyecto;

  constructor(private proyectoService: ProyectoService){}

  ngOnInit(): void {
    this.getProyectos();
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

  public onOpenModal(proyecto: Proyecto, mode: String): void {
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
    container?.appendChild(button);
    button.click();
  }

}
