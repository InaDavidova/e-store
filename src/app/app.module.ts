import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home'
import { AboutComponent } from './components/about';
import { CartComponent } from './components/cart-page/cart/cart.component'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
