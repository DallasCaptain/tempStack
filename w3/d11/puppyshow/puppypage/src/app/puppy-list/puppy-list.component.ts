import { Component, OnInit, Input } from '@angular/core';
import { PupsService } from '../pups.service';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.scss']
})
export class PuppyListComponent implements OnInit {
  bigpups:{'name': string}[]
  lilpups:{'name': string}[]
  showBig: boolean

  constructor(private _pupservice:PupsService) { }

  ngOnInit() {
    this.bigpups = [
      {'name': 'Fido'},
      {'name': 'Spike'},
      {'name': 'Glock'},
      {'name': 'Max'},
      {'name': 'Cliford'},
    ]
    this.lilpups =[
      {'name': 'Bubba'},
      {'name': 'Tito'},
      {'name': 'Ralph'},
      {'name': 'Scrappy'},
      {'name': 'Gus'},
    ]

    this._pupservice.getpups$().subscribe(pups => {
      this.showBig = pups
    })
  }

}
