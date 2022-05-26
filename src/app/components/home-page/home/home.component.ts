import { Component, OnInit } from '@angular/core';
import { ApiService, TList, TProduct } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:TList = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts()
    // @ts-ignore
    .subscribe((data:TList) => {
      this.list = data;
    })
  }

}
