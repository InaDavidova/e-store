import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { CartCheckoutComponent } from './components/cart-page/cart-checkout/cart-checkout.component';
import { CartProductComponent } from './components/cart-page/cart-product/cart-product.component';
import { CartProductItemComponent } from './components/cart-page/cart-product-item/cart-product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.componnet';
import { PhoneCardComponent } from './components/home-page/phone-card/phone-card.component';
import { DetailsComponent } from './components/details-page/details/details.component';
import { FilterMenuComponent } from './components/home-page/filter-menu/filter-menu.component';
import { CreateUserCanDeactivateGuardService} from './components/signup/create-user-can-deactivate-guard.service';
import { FooterComponent } from './components/footer/footer.component'

//import { ConfirmValidatorDirective } from './shared/confirm-validator.direvtive';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, SignupComponent, ProfileComponent, CartComponent,
    CartCheckoutComponent, CartProductComponent, CartProductItemComponent, HeaderComponent,
    LoadingSpinnerComponent,
    PhoneCardComponent,
    DetailsComponent,
    FilterMenuComponent,
    FooterComponent //ConfirmValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CreateUserCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
