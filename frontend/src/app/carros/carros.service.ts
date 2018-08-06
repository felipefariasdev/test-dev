import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor() { }

  salvar() {
    alert('salvar no banco de dados');
    return true;
  }
}
