import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './services/login.guard';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup',component:SignupComponent},
  { path:'products',component:ProductsComponent},
  { path: 'my-orders',component:MyOrdersComponent,canActivate:[LoginGuard]},
  { path: 'profile',component:ProfileComponent,canActivate:[LoginGuard]}
  
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
