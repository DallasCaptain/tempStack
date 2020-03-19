import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss']
})
export class PuppyComponent implements OnInit {
  @Input() puppy: {'name':string}
  constructor() { }

  ngOnInit() {
  }

  cuddlepup(){
    console.log('You have cuddled',this.puppy.name)
  }


}
