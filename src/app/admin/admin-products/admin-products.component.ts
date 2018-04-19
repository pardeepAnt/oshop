import { AppError } from './../../common/app-error';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
 products:object;
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.product.getAll().subscribe((response:any)=>{
      this.products = response;
    },(error:AppError)=>{

    });
  }


}
