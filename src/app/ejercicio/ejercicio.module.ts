import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioRoutingModule } from './ejercicio-routing.module';
import { EjercicioComponent } from './ejercicio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EjercicioComponent],
  imports: [
    CommonModule,
    EjercicioRoutingModule,
    FormsModule
  ],
  exports: [
    EjercicioComponent
  ],
  providers: [
  ],
})
export class EjercicioModule { }
