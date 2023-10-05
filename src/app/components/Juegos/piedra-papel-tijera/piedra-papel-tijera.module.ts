import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera.component';
import { PiedraPapelTijeraRoutingModule } from './piedra-papel-tijera.routing.module';

@NgModule({
  declarations: [PiedraPapelTijeraComponent],
  imports: [
    CommonModule,
    FormsModule,
    PiedraPapelTijeraRoutingModule
  ],
  exports: [PiedraPapelTijeraComponent],
})
export class PiedraPapelTijeraModule {

}
