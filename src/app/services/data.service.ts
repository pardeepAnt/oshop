import { AppError } from './../common/app-error';
import { BadRequest } from './../common/bad-request';
import { NotFoundError } from './../common/not-found-error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url:any,private http:Http) { }
  getAll(){
   return this.http.get(this.url+"list").map(response=>{
     return response.json();
   }).catch(this.handleError)
  }

  create(resource){
    return this.http.post(this.url+'create',resource).map(response=>{
      return response.json()
    }).catch(this.handleError);
  }
 update(resoruce){
   return this.http.put(this.url+'/update',resoruce).map(response=>{
     return response.json();
   }).catch(this.handleError);
 }
delete(id){
  return this.http.delete(this.url+"delete/"+id).map(response=>{
  return response.json();  
  }).catch(this.handleError);
}
getById(id){
  return this.http.get(this.url+"get/"+id).map(response=>{
    return response.json();
  }).catch(this.handleError)
 }

private handleError(error:Response){
  if(error.status === 404)
  return Observable.throw(new NotFoundError());
else if (error.status === 400)
  return Observable.throw(new BadRequest());
return Observable.throw(new AppError(error.json()));
}
}