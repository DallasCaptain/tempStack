import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HatCarouselComponent } from './hat-carousel/hat-carousel.component';
import { HatManagerComponent } from './hat-manager/hat-manager.component';
import { NewhatComponent } from './newhat/newhat.component';


const routes: Routes = [
  { path: '', component: HatCarouselComponent },
  { path: 'hat/:id', component: HatManagerComponent },
  { path: 'newhat', component: NewhatComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
