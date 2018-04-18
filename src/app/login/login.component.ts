import { Router } from '@angular/router';
import { BadRequest } from './../common/bad-request';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 invalidLogin:boolean=true;
 errorsMsg:string;
  constructor(private auth:AuthService,public snackBar: MatSnackBar,private router:Router) { }

  ngOnInit() {
  }
  login(form){
   this.auth.do_login(form.value).subscribe((result:any)=>{
    if(result==true){
      this.router.navigate(['/home']);
    }
    else{
      
      let snackBarRef = this.snackBar.open("email or password is incorrect",'', {
        duration: 2000
      });
    }
   },(error:AppError)=>{
    if(error instanceof NotFoundError){
    
      let snackBarRef = this.snackBar.open("Something went wrong please try again later",'', {
        duration: 2000
      });
    }    
    else{

      this.invalidLogin= true;
      
    }
    
  });
  }
}
