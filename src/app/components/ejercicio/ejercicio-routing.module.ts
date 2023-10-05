import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio.component';

const routes: Routes = [
  { path: '', component: EjercicioComponent },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],

  ],
  exports: [RouterModule]
})
export class EjercicioRoutingModule { }
