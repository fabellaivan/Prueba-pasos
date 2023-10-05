import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoryTimeComponent } from './memory-time.component';



@NgModule({
  declarations: [MemoryTimeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MemoryTimeModule {

}
