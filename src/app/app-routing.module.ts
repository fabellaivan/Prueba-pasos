import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'QuienSoy',
    pathMatch: 'full',
  },
  {
    path: 'QuienSoy',
    loadChildren: () =>
      import('./quien-soy/quiensoy.module').then((mod) => mod.QuiensoyModule),
  },
  {
    path: 'Ejercicio',
    loadChildren: () =>
      import('./ejercicio/ejercicio.module').then((mod) => mod.EjercicioModule),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'Bienvenido',
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'Registro',
    loadChildren: () =>
      import('./registrer/registrer.module').then((mod) => mod.RegistrerModule),
  },
  //  {
  //    path: "**",
  // // component:NotFoundComponent
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
