import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class Adminguard implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(){
  if(this.auth.isAdmin())
    return true;
    this.router.navigate(['']);
    return false;
  }
}
