import { Component, OnInit } from '@angular/core';
import { PupsService } from '../pups.service';

@Component({
  selector: 'app-kitty-list',
  templateUrl: './kitty-list.component.html',
  styleUrls: ['./kitty-list.component.scss']
})
export class KittyListComponent implements OnInit {
  bigkitties:{'name': string}[]
  lilkitties:{'name': string}[]
  showbig: boolean

  constructor(private _pupservice:PupsService) { }

  ngOnInit() {
    this.bigkitties = [
      {'name': 'pebbles'},
      {'name': 'peanut'},
      {'name': 'charlie'},
      {'name': 'annie'},
      {'name': 'uesless'},
    ]
    this.lilkitties = [
      {'name': 'Dogfood'},
      {'name': 'Nameless'},
      {'name': 'lufa'},
      {'name': 'puma'},
      {'name': 'cat5'},
    ]

    this._pupservice.getpups$().subscribe(kitties => {
      this.showbig = kitties
    })

  }

  showBig(){
    console.log('showbig kitties')
    this._pupservice.addpups(true)
  }
  showSmall(){
    this._pupservice.addpups(false)
  }

}
