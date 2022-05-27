import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export type TList = TProduct[];

export type TProduct = {
    id: number,
    model: string,
    manufacturer: string,
    color: string,
    displaySize: string,
    battery: string,
    rom: string,
    ram: string,
    priceEuro: number,
    picUrl: string,
    camera: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProfile(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProfile() {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateProfile(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/users/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProfile(id: number) {
    return this.http.delete<any>('http://localhost:3000/users/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProductByID(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  getAllBrands(): Set<string> {
    const brands: Set<string> = new Set();

    this.getAllProducts()
      // @ts-ignore
      .subscribe((data: TList) => {
        data.map((el) => {
          brands.add(el.manufacturer);
        });
      });

    return brands;
  }
  
}
