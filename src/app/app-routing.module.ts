import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'QuienSoy',
    pathMatch: 'full',
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
    path: 'QuienSoy',
    component: QuienSoyComponent,
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
