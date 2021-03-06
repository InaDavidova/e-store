import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public placeholder: any = this.getCartData()
  public cartItems = new BehaviorSubject([])
  constructor() {
    const ls = this.getCartData()
    if (ls) this.cartItems.next(ls)
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
    try {
      localStorage.setItem('cart', JSON.stringify(data))
    } catch (error) {
      console.error(error);
    }

  }

  getCartData() {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]')
    } catch (error) {
      console.error(error);
    }
  }

  getLocalUser() {
    try {
      return JSON.parse(localStorage.getItem('loginForm') || '{}')
    } catch (error) {
      console.error(error)
    }
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
    this.setCartData(this.placeholder)
    this.cartItems.next(this.getCartData())
  }

  clearCart() {
    localStorage.removeItem('cart')
    this.placeholder = []
    this.cartItems.next(this.getCartData())
  }



}
