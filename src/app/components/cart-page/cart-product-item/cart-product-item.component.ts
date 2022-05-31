import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {

  constructor(private cart: CartService) {

  }

  //public cartList: any = this.cart.getProducts()

  @Input() data!: any;


  ngOnInit(): void {
  }

  onDelete(product: any) {
    this.cart.deleteCartItem(product)
  }

  isEmpty() {
    this.cart.isEmpty()
  }

  countVal = 1;

  addCount() {
    if (this.countVal < 20)
      this.countVal += 1
  }
  subCount() {
    if (this.countVal >= 1)
      this.countVal -= 1
  }

}
