import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PupsService {
  private node:Subject<boolean> = new BehaviorSubject<boolean>(false);


 
  getpups$(){
    return this.node.asObservable()
  }
  addpups(data:boolean) {
    this.node.next(data);
  }
  constructor() { }
}
