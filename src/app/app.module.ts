import { ProductService } from './services/product.service';
import { Adminguard } from './services/adminguard.service';


import { SignupService } from './services/signup.service';

import { LoginGuard } from './services/login.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminManageProductsComponent } from './admin/admin-manage-products/admin-manage-products.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFormComponent } from './admin/product-form/product-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    NavbarComponent,
    CheckoutComponent,
    HomeComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminManageProductsComponent,
    OrderCompletedComponent,
    ProfileComponent,
    SignupComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    CustomFormsModule
  ],
  providers: [AuthService,
              SignupService,
              LoginGuard,
              Adminguard,
              ProductService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
