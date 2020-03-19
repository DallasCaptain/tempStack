import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { KittyListComponent } from './kitty-list/kitty-list.component';


const routes: Routes = [
  { path: 'kitties' ,component: KittyListComponent ,children:[
    { path: 'bigkitties',component: KittyListComponent },
    { path: 'lilkitties',component: KittyListComponent },

  ]},
  { path: 'puppies' ,component: PuppyListComponent, children:[
    { path: 'bigpups',component: PuppyListComponent },
    { path: 'lilpups',component: PuppyListComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
