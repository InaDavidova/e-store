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

  addToCart(product: any) {
    const ls = this.getCartData()

    const products = ls.filter((p: any) => p.id != product.id)
    this.placeholder = [...products, product]
    const newData = [...products, product]
    this.setCartData(newData)
    this.cartItems.next(this.getCartData())
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data)) // TODO: try/catch block
  }

  getCartData() {
    return JSON.parse(localStorage.getItem('cart') || '[]') // TODO: try/catch block
  }

  getProducts(): Observable<any[]> {
    return of(this.getCartData());
  }

  getCount() {
    return this.placeholder.length
  }

  getTotalPrice() {
    let totalPrice = 0
    this.placeholder.forEach((a: any) => {
      totalPrice += a.priceEuro * a.qty
      })
    return totalPrice
  }

  deleteCartItem(product: any) {
    let index = this.placeholder.indexOf(product)
    this.placeholder.splice(index, 1)
    console.log(this.placeholder);
    this.setCartData(this.placeholder)
    this.cartItems.next(this.getCartData())
  }

  clearCart() {
    this.placeholder = []
  }



}
