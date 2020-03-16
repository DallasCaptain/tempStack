import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { PuppyListComponent } from './puppy-list/puppy-list.component';


const routes: Routes = [
  { path: 'bigpups',component: PuppyListComponent },
  { path: 'lilpups',component: PuppyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
