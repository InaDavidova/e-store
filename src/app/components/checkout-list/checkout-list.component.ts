import { Component, OnInit } from '@angular/core';
import { CheckoutService, TCheckout } from 'src/app/shared/checkout.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  public list: any = []
  public submitted: boolean = false
  public count: number = 0

  constructor(private check: CheckoutService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.check.getCheckout().subscribe(data => {
      this.list = data
      this.count = this.list.length
    })
  }

  onDelete(id: number){
    this.check.deleteCheckout(id).subscribe(d => {
      console.log('Success!', d);
      this.submitted = true
      this.loadData()
    })
  }

}
