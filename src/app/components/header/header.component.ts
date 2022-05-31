import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list : any = []
  public totalItems: number = 0;
  constructor(public router: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.cart.cartItems.subscribe((d: string | any[]) => {
      this.totalItems = d.length
    })
    
  }

}
