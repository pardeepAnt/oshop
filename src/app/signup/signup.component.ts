import { NotFoundError } from './../common/not-found-error';
import { BadRequest } from './../common/bad-request';
import { AppError } from './../common/app-error';
import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
singupDone:Boolean=false;
  constructor(private singupservice:SignupService) { }

  ngOnInit() {
  }
  createProfile(f){
    this.singupservice.create(f.value).subscribe((response)=>{
      if(response.done == true){
        this.singupDone = true;
      }
    },((error:AppError)=>{
        if(error instanceof BadRequest){

        }else if(error instanceof NotFoundError){

        }else{

        }
    })
  );
 }
}
