import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ShopcartService extends DataService{

  constructor(http:Http) { 
    super(environment.apiUrl+'admin/addCart/',http);
  }
  createCart(product){
    let existCartId = localStorage.getItem('cart_id');
    if(existCartId) product.cartId= existCartId;
    this.create(product).subscribe(res=>{
      let cartId = res;

      localStorage.setItem('cart_id',cartId);
    });
  }
}
