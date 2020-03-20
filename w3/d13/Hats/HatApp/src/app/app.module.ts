import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HatComponent } from './hat/hat.component';
import { HatCarouselComponent } from './hat-carousel/hat-carousel.component';
import { HatManagerComponent } from './hat-manager/hat-manager.component';
import { NewhatComponent } from './newhat/newhat.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { HatGridComponent } from './hat-grid/hat-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HatComponent,
    HatCarouselComponent,
    HatManagerComponent,
    NewhatComponent,
    NavbarComponent,
    HatGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
