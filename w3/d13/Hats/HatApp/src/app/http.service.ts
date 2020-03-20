import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(
    private _http: HttpClient,

    ){

  }

  allhats() {
    return this._http.get('/hats')
  }
  createhat(newhat) {
    console.log('service create hat called')
    return this._http.post('/hats', newhat)
  }
  getHat(id) {
    return this._http.get('/hats/'+id)
  }
  updateHat(hat: { _id: number; color: string; price: number; stock: number; url: string; }) {
    return this._http.put('/hats/',hat)
  }
  removehat(id) {
    console.log('http service remove hat', id)
    return this._http.delete('/hats/'+id)
  }
}
