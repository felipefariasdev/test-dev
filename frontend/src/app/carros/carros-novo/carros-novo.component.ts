import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-novo',
  templateUrl: './carros-novo.component.html',
  styleUrls: ['./carros-novo.component.css']
})
export class CarrosNovoComponent implements OnInit {
    addForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private carrosService: CarrosService) {
    }

    onSubmit() {

        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }

        const salvarCarro = this.carrosService.salvar(this.addForm.controls);
        if (salvarCarro) {
            this.router.navigate(['carros']);
        }
    }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            ano: ['', Validators.required]
        });
    }
}
