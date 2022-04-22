import { Component, OnInit } from '@angular/core';
import { Habilidad } from './habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades: Habilidad[] = [];
  public editHabilidad: Habilidad | undefined;
  public deleteHabilidad!: Habilidad | undefined;
  

  constructor(private habilidadService: HabilidadService){}

  ngOnInit(): void {
    this.getHabilidades();
  }

  public getHabilidades(): void {
    this.habilidadService.getHabilidades().subscribe(
      (response: Habilidad[]) => {
        this.habilidades = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddHabilidad(addForm: NgForm): void{
    document.getElementById('add-habilidad-form')?.click();
    this.habilidadService.addHabilidad(addForm.value).subscribe(
      (response: Habilidad) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateHabilidad(habilidad: Habilidad): void {
    this.habilidadService.updateHabilidad(habilidad).subscribe(
      (response: Habilidad) => {
        console.log(response);
        this.getHabilidades();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteHabilidad(habilidadId: number): void {
    this.habilidadService.deleteHabilidad(habilidadId).subscribe(
      (response: void) => {
        console.log(response);
        this.getHabilidades();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(mode: String, habilidad?: Habilidad): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      this.editHabilidad = habilidad;
      button.setAttribute('data-target', '#updateHabilidadModal');
    }
    if (mode === 'delete'){
      this.deleteHabilidad = habilidad;
      button.setAttribute('data-target', '#deleteHabilidadModal');
    }
    if (mode === 'add'){
      button.setAttribute('data-target', '#addHabilidadModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
