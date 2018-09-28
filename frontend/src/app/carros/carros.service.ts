import { Injectable } from '@angular/core';
import { Carros } from './carros.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  carros: Carros;

  constructor(private http: HttpClient) {
    
   }
    

  salvar(c) {
    let success: any = false;
    let error: any = false;
    
    this.carros = new Carros();
    this.carros.modelo = c.modelo.value;
    this.carros.marca = c.marca.value;
    this.carros.ano = c.ano.value;
    this.http.post('http://127.0.0.1:8000/api/carros',this.carros).subscribe(
      success => console.log('Carro cadastrado com sucesso! Resposta do servidor: '+ success),
      error => console.log('Erro ao realizar o cadastro! Resposta do servidor: '+ error)
    );
    
    if(error == false) {
      return true;
    } else {
      console.log(error);
    }
  }


  listar(): Promise<Carros[]>{
    return fetch('http://127.0.0.1:8000/api/carros')
    .then(res=>res.json())
    .catch(err=>{
      throw new Error(err.message);  
    });
  }
    
}