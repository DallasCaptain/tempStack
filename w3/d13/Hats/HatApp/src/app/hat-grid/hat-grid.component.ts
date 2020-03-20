import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-hat-grid',
  templateUrl: './hat-grid.component.html',
  styleUrls: ['./hat-grid.component.scss']
})
export class HatGridComponent implements OnInit {
  allhats: any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.allhats().subscribe(data => {
      // @ts-ignore
      this.allhats = data.hats;

    })
  }

}
