import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuppyComponent } from './puppy/puppy.component';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { PupsService } from './pups.service';

@NgModule({
  declarations: [
    AppComponent,
    PuppyComponent,
    PuppyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
