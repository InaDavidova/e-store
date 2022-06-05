import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list: any = []
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.list = this.cart.placeholder
  }

}
