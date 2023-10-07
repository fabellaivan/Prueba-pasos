import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CartasComponent } from '../Juegos/cartas/cartas.component';



@NgModule({
    declarations: [HomeComponent,NavbarComponent,ChatComponent,CartasComponent],
    exports: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule,FormsModule]
})
export class HomeModule {}
