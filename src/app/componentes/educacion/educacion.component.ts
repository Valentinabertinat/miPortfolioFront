import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from './educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public editEducacion!: Educacion;
  public deleteEducacion!: Educacion;

  constructor(private educacionService: EducacionService){}

  ngOnInit(): void {
    this.getEducaciones();
  }

  public getEducaciones(): void {
    this.educacionService.getEducaciones().subscribe(
      (response: Educacion[]) => {
        this.educaciones = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateEducacion(educacion: Educacion): void {
    this.educacionService.updateEducacion(educacion).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEducaciones();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEducacion(educacionId: number): void {
    this.educacionService.deleteEducacion(educacionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEducaciones();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(educacion: Educacion, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#updateEducacionModal');
    }
    if (mode === 'delete'){
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
