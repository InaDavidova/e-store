import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  postCheckout(data: any){
    return this.http.post<any>('http://localhost:3000/checkout', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
