import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.component.html',
  styleUrls: ['./hat.component.scss']
})
export class HatComponent implements OnInit {
  //imgurl: string;
  @Input() hat: {
    _id: number,
    color: string,
    price: number,
    stock: number,
    url: string};
  constructor() { }

  ngOnInit() {

  }

}
