import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []  

  constructor(private http : HttpClient) {  
  }

  //GET user?

  getProduct(id: number){
    return this.http.get<any>('http://localhost:3000/products/'+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  addToCart(product: any){
    return this.cartItemList.push(product)
  }

  getTotalPrice(){
    let totalPrice = 0
    this.cartItemList.map((a: any) => {
      totalPrice += a.total
    })
  }

  deleteCartItem(product : any){
    this.cartItemList.map((a : any, index: any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
  }

  clearCart(){
    this.cartItemList = []
  }


}
