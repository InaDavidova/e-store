import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

export type TList = TCheckout[];

export type TCheckout = {
    orderId: number,
    user: string,
    country: string,
    address: string,
    phone: number,
    items: string,
    count: string,
    price: number,
}

@Injectable({
  providedIn: 'root'
})
export class  CheckoutService {

  constructor(private http: HttpClient, private cart: CartService) { }

  addCheckout(item: TCheckout){
    
    let tmp = this.cart.getCartData()
    item.items = tmp.map((product:any) => product.model).toString();
    item.price = this.cart.getTotalPrice()
    item.count = tmp.length
    item.user = this.cart.getLocalUser()
    
    return this.http.post<any>('http://localhost:3000/checkout', item)
  }

  getCheckout():Observable<TCheckout[]> {
    return this.http.get<TCheckout[]>('http://localhost:3000/checkout')
  }

  deleteCheckout(id: number){
    const deleteEndpoint = 'http://localhost:3000/checkout/' + id
    console.log(deleteEndpoint);
    
    return this.http.delete(deleteEndpoint)
  }
}
