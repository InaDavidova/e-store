import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { CheckoutService } from 'src/app/shared/checkout.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  constructor(private cart: CartService, private check: CheckoutService) { }

  ngOnInit(): void {
  }

  onPost(data: any){
    this.check.postCheckout(data)
  }

}
