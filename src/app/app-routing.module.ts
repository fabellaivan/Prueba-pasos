import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { LoginComponent } from './login/login.component';

const route: Routes =[
  {
    path: "",redirectTo: "/Ejercicio",pathMatch: "full",
    //Al ser ruta de direccion siempre debe llevar pathMatch
  },
  {
    path: "primero",
    component: EjercicioComponent,
  },
  {
    path: "Login",
    component: LoginComponent,
    children:[
      {
        path: "Ejercicio",
        component: EjercicioComponent,
      }
    ]
  },
  {
    path: "**",
  //  component:NotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
