import { ActivatedRoute } from '@angular/router';
import { AppError } from './../common/app-error';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShopcartService } from '../services/shopcart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
allpro :Product[];
category:any;
getProduct :Product[];
  constructor(
          private route:ActivatedRoute,
          private productS:ProductService,
          private cartService:ShopcartService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params=>{
      this.category = params.get('category');
     this.do_search();
     


    });
    this.productS.getAll().subscribe(res=>{
   
      this.getProduct =res;
      this.allpro = res;
   


    },(error:AppError)=>{

    })
  }
  do_search(){
   if(this.category == 'all'){
   
    this.getProduct = this.allpro;
   }else{
     this.getProduct = (this.category) ? this.allpro.filter(p => p.category.toLowerCase().includes(this.category.toLowerCase())):this.allpro;

   }

 }
 addCart(product){
  this.cartService.createCart(product);
}

}