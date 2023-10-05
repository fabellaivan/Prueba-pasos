import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera.component';


const routes: Routes = [{ path: '', component: PiedraPapelTijeraComponent }];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class PiedraPapelTijeraRoutingModule { }
 
