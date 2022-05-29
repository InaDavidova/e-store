import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

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

  getProducts(): Observable<any[]> {
    return of(this.cartItemList);
}

  getCount(){
    return this.cartItemList.length
  }

  addToCart(product: any){
    this.cartItemList.push(product)
    alert("item added to list (not really tho)")
    console.log(this.cartItemList);
    
  }

  getTotalPrice(){
    let totalPrice = 0
    this.cartItemList.map((a: any) => {
      totalPrice += a.total
    })
    return totalPrice
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
