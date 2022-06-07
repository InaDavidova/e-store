import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from './cart.service';

export type TList = TCheckout[];

export type TCheckout = {
    orderId: number,
    user: string,
    items: string,
    count: string,
    price: number,
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient, private cart: CartService) { }

  postCheckout(data: TCheckout){
    return this.http.post<any>('http://localhost:3000/checkout', data).pipe(
      map((res: TCheckout) => {
        return res;
      })
    );
  }

  getCart(){
    this.cart.getCartData()
  }
}
