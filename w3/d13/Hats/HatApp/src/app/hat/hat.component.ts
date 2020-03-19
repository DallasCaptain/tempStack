import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.component.html',
  styleUrls: ['./hat.component.scss']
})
export class HatComponent implements OnInit {
  imgurl: string;
  @Input() hat: {url: string};
  constructor() { }

  ngOnInit() {
    this.imgurl = this.hat.url;
    console.log(this.imgurl)
  }

}
