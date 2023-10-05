import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';
import { MemoryTimeComponent } from './components/Juegos/memory-time/memory-time.component';
import { PiedraPapelTijeraComponent } from './components/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemoryTimeModule } from './components/Juegos/memory-time/memory-time.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
})
export class AppModule {}
