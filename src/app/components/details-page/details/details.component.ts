import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, TProduct } from 'src/app/shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product!: TProduct;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const id = (this.route.params as any).value.id;

    this.api.getProductByID(id)
    // @ts-ignore
    .subscribe((data:TProduct) => {
      this.product = data;
    })
  }
}
