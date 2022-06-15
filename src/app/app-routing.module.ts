import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home/home.component'
import { DetailsComponent } from './components/details-page/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { CartCheckoutComponent } from './components/cart-page/cart-checkout/cart-checkout.component';
import { CheckoutListComponent } from './components/checkout-list/checkout-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CreateUserCanDeactivateGuardService } from './components/signup/create-user-can-deactivate-guard.service';
import { AdminGuardService } from './shared/admin-guard.service';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [CreateUserCanDeactivateGuardService]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AdminGuardService] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
  { path: 'checkout', component: CartCheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'purchases', component: CheckoutListComponent, canActivate: [AuthGuardService] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
