import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Output() onDeleteEducacion: EventEmitter<any> = new EventEmitter()
  educacionLista:any;
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
      this.educacionLista=data.educacion;
    });
  }

  onDelete(education: any){
    this.onDeleteEducacion.emit(education);
  }

  deleteItem(education: any){
    this.datosPortfolio.deleteItem(education)
    .subscribe(()=> (
      this.educacionLista = this.educacionLista.filter( (t: { id: any; }) => t.id !== education.id)
    ))
  }

  
}
