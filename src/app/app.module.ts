import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home'
import { AboutComponent } from './components/about';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { CartCheckoutComponent } from './components/cart-page/cart-checkout/cart-checkout.component';
import { CartProductComponent } from './components/cart-page/cart-product/cart-product.component';
import { CartProductItemComponent } from './components/cart-page/cart-product-item/cart-product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, LoginComponent, SignupComponent, ProfileComponent, CartComponent,
    CartCheckoutComponent, CartProductComponent, CartProductItemComponent
=======
import { CartComponent } from './components/cart-page/cart/cart.component';
import { ProductComponent } from './components/cart-page/product/product.component';
import { ProductItemComponent } from './components/cart-page/product-item/product-item.component';
import { CartProductComponent } from './components/cart-page/cart-product/cart-product.component';
import { CartProductItemComponent } from './components/cart-page/cart-product-item/cart-product-item.component';
import { CartCheckoutComponent } from './components/cart-page/cart-checkout/cart-checkout.component'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, CartComponent, ProductComponent, ProductItemComponent, CartProductComponent, CartProductItemComponent, CartCheckoutComponent
>>>>>>> c3dde7444b4b3c4f736afcc28af9b45149346c50
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
