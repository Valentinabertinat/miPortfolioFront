import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/servicios/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  public personas: Persona[] = [];
  public editPersona!: Persona;

  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
    this.getPersonas();
  }

  public getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (response: Persona[]) => {
        this.personas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdatePersona(persona: Persona): void {
    this.personaService.updatePersona(persona).subscribe(
      (response: Persona) => {
        console.log(response);
        this.getPersonas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(persona: Persona, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      this.editPersona = persona;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }


}