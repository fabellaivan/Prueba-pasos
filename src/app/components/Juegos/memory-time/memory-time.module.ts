import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoryTimeComponent } from './memory-time.component';
import { MemoryTimeRoutingModule } from './memory-time.routing.module';
import { ChatComponent } from '../../chat/chat.component';

@NgModule({
  declarations: [MemoryTimeComponent,ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    MemoryTimeRoutingModule
  ],
  exports: [MemoryTimeComponent],
})
export class MemoryTimeModule {

}
