import { AppError } from './../../common/app-error';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';
import{ Product }  from'./product';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
 products:Product[];
 filterProduct : any[];
 tableResource :DataTableResource<Product>;
 items:Product[];
 itemCount:number;
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.product.getAll().subscribe((response:any)=>{
      this.filterProduct = response;
      this.products = response;
      
      },(error:AppError)=>{

    });
  }
 
 
  searchValue(form:string){
   this.filterProduct= (form) ? this.products.filter(p => p.title.toLowerCase().includes(form.toLowerCase())):this.products;
   
   
  }

}
