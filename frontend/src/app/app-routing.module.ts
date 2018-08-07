import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarrosComponent } from './carros/carros.component';
import { CarrosNovoComponent } from './carros/carros-novo/carros-novo.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'carros', component: CarrosComponent },
    { path: 'carros-novo', component: CarrosNovoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
