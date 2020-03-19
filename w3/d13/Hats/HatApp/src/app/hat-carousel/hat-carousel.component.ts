import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-hat-carousel',
  templateUrl: './hat-carousel.component.html',
  styleUrls: ['./hat-carousel.component.scss']
})
export class HatCarouselComponent implements OnInit {
  top3:{url:string}[];
  allhats: any

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this.top3=[]
    this._httpService.allhats().subscribe(data => {
      this.allhats = data.hats;
      for(let i = 0; i < this.allhats.length && i < 3; i++){
      this.top3.push(this.allhats[i])
      }
    })



  }

}
