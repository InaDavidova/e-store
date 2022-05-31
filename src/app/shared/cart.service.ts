import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TProduct } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public placeholder: any = this.getCartData()
  public cartItems = new BehaviorSubject([])

  constructor() { 
    const ls = this.getCartData()
    if (ls) this.cartItems.next(ls)
    //this.placeholder = ls;
  }

  addToCart(product: TProduct) {
    const ls = this.getCartData()

    const products = ls.filter((p: any) => p.id != product.id)

    const newData = [...products, product]
    this.setCartData(newData)
    this.cartItems.next(this.getCartData())
    this.placeholder.push(product)
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data))
  }

  getCartData() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  getProducts(): Observable<any[]> {
    return of(this.getCartData());
  }

  getCount() {
    return this.placeholder.length
  }

  isEmpty(){
    let empty = false;
    if (this.placeholder.length == 0)
      empty = true
    return empty
  }

  getTotalPrice() {
    let totalPrice = 0
    this.placeholder.map((a: any) => {
      totalPrice += a.total
    })
    return totalPrice
  }

  deleteCartItem(product: any) {
    let index = this.placeholder.indexOf(product)
    this.placeholder.splice(index, 1)
    console.log(this.placeholder);
    this.setCartData(this.placeholder)
    
  }

  clearCart() {
    this.placeholder = []
  }



}
