import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarrosService } from './carros.service';
import { Carros } from './carros.model';



@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  

  carros: Carros;
  listarCarros;

  constructor(private carrosService: CarrosService) { }

  ngOnInit() {
    const teste = this.carrosService.listar();
    this.listarCarros = teste;
    console.log(teste);
  }
}
