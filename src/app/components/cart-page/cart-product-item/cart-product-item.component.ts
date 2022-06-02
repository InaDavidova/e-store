import { Component, Input, OnInit } from '@angular/core';
import { TProduct } from 'src/app/shared/api.service';
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


  addCount() {
    if (this.data.qty <= 20){
    this.data.qty++
    }
  }
  subCount() {
    if (this.data.qty > 1){
    this.data.qty--
    }
  }

  setPrice(){

  }

}
