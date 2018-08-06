import { Component, OnInit } from '@angular/core';
import { CarrosService } from './carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor(private carrosService: CarrosService) { }

  ngOnInit() {
  }

}
