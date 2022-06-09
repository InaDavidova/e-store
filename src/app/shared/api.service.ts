import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


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
export class ApiService implements OnInit{

  isLoading = false;
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  //constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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

  isUser():boolean {
    let user = localStorage.getItem("loginForm");

    if (user) {
      return true;      
    } else {
      return false;
    }
  }

  isAdmin():boolean {
    let userData = JSON.parse(localStorage.getItem("loginForm") || '{}')

    if (userData.position == 'admin') {
      return true;      
    } else {
      return false;
    }
  }
  

  logout(){
    localStorage.removeItem('loginForm');
  }

}
