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
  list: any = []
  total: number = 0
  ngOnInit(): void {
    this.list = this.cart.placeholder
    this.total = this.cart.getTotalPrice();
  }



}
