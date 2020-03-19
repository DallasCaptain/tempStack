import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.scss']
})
export class KittyComponent implements OnInit {
  @Input() kitty: {'name':string}
  constructor() { }

  ngOnInit() {
  }
  cuddlekitty(){
    console.log('You have cuddled',this.kitty.name)
  }

}
