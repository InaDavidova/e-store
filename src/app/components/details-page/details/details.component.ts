import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, TProduct } from 'src/app/shared/api.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product!: TProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public api: ApiService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    const id = (this.route.params as any).value.id;

    this.api
      .getProductByID(id)
      // @ts-ignore
      .subscribe((data: TProduct) => {
        this.product = data;
      });
  }

  addProduct(product: TProduct) {
    
    if (this.api.isUser()) {
      this.cart.addToCart({ ...product, qty: 1 });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
