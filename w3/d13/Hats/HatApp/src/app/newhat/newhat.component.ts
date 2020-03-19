import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newhat',
  templateUrl: './newhat.component.html',
  styleUrls: ['./newhat.component.scss']
})
export class NewhatComponent implements OnInit {
  newhat: {
    color: string,
    price: number,
    stock: number,
    url: string,
  };

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform() {
    this.newhat = {
      color: '',
      price: 0,
      stock: 0,
      url: '',
    };
  }

  createhat() {
    console.log('button clicked')
    this._httpService.createhat(this.newhat).subscribe(data =>{
      console.log(data);
      this.resetform();
    });
  }
}
