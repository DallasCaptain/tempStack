import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hat-manager',
  templateUrl: './hat-manager.component.html',
  styleUrls: ['./hat-manager.component.scss']
})
export class HatManagerComponent implements OnInit {
  hattoshow:{url: string}
  constructor() {
}

  ngOnInit() {
    this.hattoshow = {url: 'https://www.villagehatshop.com/photos/product/standard/4511390S408101/alt/408101.jpg'}

  }

  addtocart(){
    console.log('added hat to cart')
  }
}
