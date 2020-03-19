import { Component } from '@angular/core';
import { PupsService } from './pups.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'puppypage';
  showBigPups: boolean;
  constructor(private _pupservice:PupsService) { }
  ngOnInit(): void {
    this._pupservice.getpups$().subscribe(pups => {
      this.showBigPups = pups
    })
  }



}
