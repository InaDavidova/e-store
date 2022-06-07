import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { TProduct } from 'src/app/shared/api.service';
import { CartService } from 'src/app/shared/cart.service';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list : any = [];

  public totalItems: number = 0;

  constructor(public router: Router, private cart: CartService, public api: ApiService) { }
  
  // console.log(this.isUser);
  ngOnInit(): void {
    this.cart.cartItems.subscribe((d: string | TProduct[]) => {
      this.totalItems = d.length
    })
    
  }

}
