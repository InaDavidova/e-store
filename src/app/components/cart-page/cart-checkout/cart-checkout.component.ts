import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { CheckoutService } from 'src/app/shared/checkout.service';
import { TCheckout } from 'src/app/shared/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  constructor(private cart: CartService, private check: CheckoutService, private route: Router,
  ) {}
  list: any = []
  total: number = 0
  ngOnInit(): void {
    this.list = this.cart.placeholder
    this.total = this.cart.getTotalPrice();
  }

  onSubmit(item: TCheckout) {

    this.check.addCheckout(item)
      .subscribe(
        data => // {
          console.log('Success', data),
        
      )
      
    this.route.navigateByUrl("/payment")
  }



}
