import { Component, OnInit } from '@angular/core';
import { ApiService, TList, TProduct } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: TList = [];
  brands: Set<string> = new Set();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllProducts()
      // @ts-ignore
      .subscribe((data: TList) => {
        this.list = data;

        data.map((el) => this.brands.add(el.manufacturer));
      });
  }
}
