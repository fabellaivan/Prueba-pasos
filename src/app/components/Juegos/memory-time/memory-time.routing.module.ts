import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { MemoryTimeComponent } from './memory-time.component';

const routes: Routes = [{ path: '', component: MemoryTimeComponent }];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class MemoryTimeRoutingModule { }
 
