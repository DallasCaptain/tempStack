import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Angular';
  constructor(private _httpService: HttpService){
    _httpService.getTasks();
  }


  changeTitle(){
    this.title = this.title=='Hello Angular'?"I am IronMan!":'Hello Angular'
  }


}
