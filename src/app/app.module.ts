import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    EjercicioComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
