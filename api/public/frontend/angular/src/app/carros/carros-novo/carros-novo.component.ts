import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-novo',
  templateUrl: './carros-novo.component.html',
  styleUrls: ['./carros-novo.component.css']
})
export class CarrosNovoComponent implements OnInit {
    addForm: FormGroup;
    submitted: boolean = false;
    invalidLogin: boolean = false;
    constructor(private formBuilder: FormBuilder, private router: Router, private carrosService: CarrosService) { }

    onSubmit() {

        this.carrosService.salvar();

        console.log('foi');

        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }

        console.log('marca: ' + this.addForm.controls.marca.value);
        console.log('modelo: ' + this.addForm.controls.modelo.value);
        console.log('ano: ' + this.addForm.controls.ano.value);

        this.router.navigate(['carros']);
    }

    ngOnInit() {

        this.addForm = this.formBuilder.group({
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            ano: ['', Validators.required]
        });
    }

}
