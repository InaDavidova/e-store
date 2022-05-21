import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home'
import { AboutComponent } from './components/about';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { ProductComponent } from './components/cart-page/product/product.component';
import { ProductItemComponent } from './components/cart-page/product-item/product-item.component';
import { CartProductComponent } from './components/cart-page/cart-product/cart-product.component';
import { CartProductItemComponent } from './components/cart-page/cart-product-item/cart-product-item.component';
import { CartCheckoutComponent } from './components/cart-page/cart-checkout/cart-checkout.component'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, CartComponent, ProductComponent, ProductItemComponent, CartProductComponent, CartProductItemComponent, CartCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
