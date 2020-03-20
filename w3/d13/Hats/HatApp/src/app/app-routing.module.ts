import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HatCarouselComponent } from './hat-carousel/hat-carousel.component';
import { HatManagerComponent } from './hat-manager/hat-manager.component';
import { NewhatComponent } from './newhat/newhat.component';
import { HatGridComponent } from './hat-grid/hat-grid.component';


const routes: Routes = [
  { path: '', component: HatCarouselComponent },
  { path: 'hats/:id', component: HatManagerComponent },
  { path: 'newhat', component: NewhatComponent },
  { path: 'hatgrid', component: HatGridComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
