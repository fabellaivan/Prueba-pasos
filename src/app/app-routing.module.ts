import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes =[
  {
    path: "",redirectTo: "QuienSoy",pathMatch: "full",
    //Al ser ruta de direccion siempre debe llevar pathMatch
  },
  {
    path: "Ejercicio",
    component: EjercicioComponent,
  },
  {
    path: "Registro",
    component: RegistrerComponent,
  },
  {
    path: "Login",
    component: LoginComponent,
   },
   {
    path:"QuienSoy",
    component: QuienSoyComponent
   }
  //  {
  //    path: "**",
  // // component:NotFoundComponent
  //  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
