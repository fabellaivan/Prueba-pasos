import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AhorComponent } from './ahor.component';
import { IngresoPalabraComponent } from './palabras/palabra.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PalabraService } from './../../../services/palabra-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AhorComponent,
    IngresoPalabraComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [PalabraService],
  bootstrap: [AhorComponent]
})
export class AhorModule  { }
