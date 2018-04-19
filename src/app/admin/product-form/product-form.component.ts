import { AppError } from './../../common/app-error';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
error:any='';
product={
         title:'',
         price:'',
         category:'',
         imageUrl:''
        };
isError:boolean=false;

  constructor(private pservice:ProductService,private router:Router,private route:ActivatedRoute) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.get(id);


  }

  ngOnInit() {
 
  }
  addProduct(f){
    this.pservice.create(f).subscribe(response=>{
      if(response.saved == 1){
      this.isError =false;
        this.router.navigate(['/admin/products']);
      }else{
        this.isError =true;
        this.error=response.error;
        
      }

    },(error:AppError)=>{

    });
 }
 get(productId){
    this.pservice.getById(productId).subscribe(response=>{
      this.product = response;
    },(error:AppError)=>{
      
    });
 }

}
