import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/servicios/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sobremi } from './sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  public sobremis: Sobremi[] = [];
  public editSobremi!: Sobremi;

  constructor(private sobremiService: SobremiService){}

  ngOnInit(): void {
    this.getSobremis();
  }

  public getSobremis(): void {
    this.sobremiService.getSobremis().subscribe(
      (response: Sobremi[]) => {
        this.sobremis = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateSobremi(sobremi: Sobremi): void {
    this.sobremiService.updateSobremi(sobremi).subscribe(
      (response: Sobremi) => {
        console.log(response);
        this.getSobremis();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(sobremi: Sobremi, mode: String): void {
    const container = document.getElementById('main-container1');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      this.editSobremi = sobremi;
      button.setAttribute('data-target', '#updateSobremiModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
