import { Component, OnInit } from '@angular/core';
import { ApiService, TList } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: TList = [];
  allProducts: TList = [];
  brands: Set<string> = new Set();
  colors: Set<string> = new Set();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api
      .getAllProducts()
      // @ts-ignore
      .subscribe((data: TList) => {
        this.list = data;
        this.allProducts = data;

        data.map((el) => {
          this.brands.add(el.manufacturer);
          this.colors.add(el.color);
        });
      });
  }

  onFilter($event: any): void {
    let filteredData: TList = this.allProducts;

    const formData: any = new FormData($event.target);
    const searchText = formData.get('search');
    const chosenBrands = formData.getAll('brand');
    const chosenColors = formData.getAll('color');
    const priceFrom = formData.get('priceFrom');
    const priceTo = formData.get('priceTo');

    if (searchText) {
      filteredData = filteredData.filter((el) => {
        for (let [key, value] of Object.entries(el)) {
          if (value.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true;
          }
        }
        return false;
      });
    }

    if(chosenBrands.length > 0){
      let filterAfterBrands:any = [];

      chosenBrands.map((el:string)=>{
        let result = filteredData.filter(x=>x.manufacturer == el);
        result.map(x=>filterAfterBrands.push(x));
      })

      filteredData = filterAfterBrands;
    }

    if(chosenColors.length > 0){
      let filterAfterColors:any = [];

      chosenColors.map((el:string)=>{
        let result = filteredData.filter(x=>x.color == el);
        result.map(x=>filterAfterColors.push(x));
      })

      filteredData = filterAfterColors;
    }
    
    if(priceFrom){
      filteredData = filteredData.filter(el=>Number(el.priceEuro) >= Number(priceFrom));
    }

    if(priceTo){
      filteredData = filteredData.filter(el=>Number(el.priceEuro) <= Number(priceTo));
    }

    this.list = filteredData;
    console.log(filteredData);
  }
}
