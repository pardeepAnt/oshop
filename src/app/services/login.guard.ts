import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){

  }
  canActivate() {
    if(this.auth.isLoggedIn()) return true;
    this.router.navigate(['']);
    return false;
  }
}