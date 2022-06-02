import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  list: any = []

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    // this.cart.getProducts()
    //   .subscribe((data: any) => {
    //     this.list = data;
    //   });

    this.list = this.cart.placeholder // TODO
    
  }

}
