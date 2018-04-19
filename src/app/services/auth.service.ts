import { Router } from '@angular/router';
import { AppError } from './../common/app-error';
import { BadRequest } from './../common/bad-request';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper,tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http:Http,private router:Router) { }
  do_login(form){
   return this.http.post(environment.apiUrl+"/user/login",form).map(response=>{
      let result = response.json();
      if(result && result.token){
        
       
      
        
        localStorage.setItem('token',result.token);
        return true;
      }else{
        return false;
      }
    }).catch(this.handleError);
 }
 isLoggedIn(){
  return tokenNotExpired();
 }
 isAdmin(){
  let jwt = new JwtHelper();
  let token = localStorage.getItem('token');
  let decodeToken = jwt.decodeToken(token);
  if(decodeToken.isAdmin == 0)
    return false;
    return true;
 }
 logout(){
  localStorage.removeItem('token');
  this.router.navigate(['']);
 }
 private handleError(error:Response){
  if(error.status === 404)
    return Observable.throw(new NotFoundError());
  else if (error.status === 400)
    return Observable.throw(new BadRequest());
  return Observable.throw(new AppError(error.json()));
}
}
