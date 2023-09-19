import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes =[
  {
    path: "",redirectTo: "QuienSoy",pathMatch: "full",
  },
  {
    path: "Home",
    loadChildren: () => import('./home/home.module')
    .then(mod => mod.HomeModule)
  },
  {
    path: "Login",
    loadChildren: () => import('./login/login.module.module')
    .then(mod => mod.LoginModuleModule)
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
