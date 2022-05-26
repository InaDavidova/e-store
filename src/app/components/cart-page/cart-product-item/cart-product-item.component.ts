import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countVal = 1;

  addCount(){
    if (this.countVal < 20)
    this.countVal += 1
  }
  subCount(){
    if (this.countVal >= 0)
    this.countVal -= 1
  }

}
