import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }



  getTasks(){
    // our http response is an Observable, store it in a variable
    this._http.get('/tasks').subscribe(data => console.log("Got our tasks!", data));
 }
}
