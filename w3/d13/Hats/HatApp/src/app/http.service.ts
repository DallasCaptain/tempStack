import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private _http: HttpClient) {

  }

  allhats() {
      return this._http.get('/hats')
    }
  createhat(newhat) {
    console.log('service create hat called')
    return this._http.post('/hats', newhat)
  }
}
