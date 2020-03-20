import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-hat-manager',
  templateUrl: './hat-manager.component.html',
  styleUrls: ['./hat-manager.component.scss']
})
export class HatManagerComponent implements OnInit {
  showupdate:boolean;
  hattoshow:{
    _id: number,
    color: string,
    price: number,
    stock: number,
    url: string};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
}

  ngOnInit() {
    this.showupdate = false;
    this.hattoshow = {_id: 0, color: 'black',price: 0, stock: 0,url: 'https://www.villagehatshop.com/photos/product/standard/4511390S408101/alt/408101.jpg'}
    this.getHatFromService();
  }

  getHatFromService() {
    this._route.params.subscribe((params: Params) =>{
      let id = params['id']
      console.log('id of hat to show:', id)
      this._httpService.getHat(id).subscribe(data =>{
        // @ts-ignore
        console.log('hat from server:',data.hat)
        // @ts-ignore
        this.hattoshow = data.hat
      })
    })
  }

  addtocart(){
    console.log('added hat to cart')
  }

  removehat(){

      this._httpService.removehat(this.hattoshow._id).subscribe(() =>{
      this._router.navigate(['/'])
    })
  }

  updateHat(){
    this._httpService.updateHat(this.hattoshow).subscribe(() => {
      this._router.navigate(['/'])
    })
  }

  showUpdate(){
    this.showupdate = ! this.showupdate;
  }

}
