import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'QuienSoy',
    pathMatch: 'full',
  },
  {
    path: 'QuienSoy',
    loadChildren: () =>
      import('./components/quien-soy/quiensoy.module').then((mod) => mod.QuiensoyModule),
  },
  {
    path: 'Ejercicio',
    loadChildren: () =>
      import('./components/ejercicio/ejercicio.module').then((mod) => mod.EjercicioModule),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./components/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'Bienvenido',
    loadChildren: () =>
      import('./components/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'Registro',
    loadChildren: () =>
      import('./components/registrer/registrer.module').then((mod) => mod.RegistrerModule),
  },
  {
    path: 'Chat',
     // component: ChatComponent,
      loadChildren: () =>
      import('./components/chat/chat.module').then((mod) => mod.ChatModule)
  },
  {
    path: 'Memoria',
      loadChildren: () =>
      import('./components/Juegos/memory-time/memory-time.module').then((mod) => mod.MemoryTimeModule),
  },
  {
    path: 'PPT',
      loadChildren: () =>
      import('./components/Juegos/piedra-papel-tijera/piedra-papel-tijera.module').then((mod) => mod.PiedraPapelTijeraModule),
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
