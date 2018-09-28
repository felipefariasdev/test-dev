import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarrosComponent } from './carros/carros.component';
import { CarrosService } from './carros/carros.service';
import { CarrosNovoComponent } from './carros/carros-novo/carros-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarrosComponent,
    CarrosNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
