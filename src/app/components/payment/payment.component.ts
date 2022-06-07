import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from 'src/app/shared/cart.service';
import { CheckoutService, TCheckout } from 'src/app/shared/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private last: any = {}
  private list: any = []
  public amount: string = "0"
  public isEmpty: boolean = true
  public price: number = 0

  constructor(private cart: CartService, private route: Router, private check: CheckoutService) {

  }


  ngOnInit(): void {

    if (this.cart.placeholder.length != 0) {
      this.isEmpty = false
    }

    this.check.getCheckout().subscribe(data => {
      this.list = data
      this.last = this.list[this.list.length - 1]
      this.price = this.last.price
      console.log(this.price);
      this.amount = this.price.toString()
      console.log(this.amount);


      render(
        {
          id: "#myPayPalBtn",
          currency: "USD",
          value: this.amount,
          onApprove: (details) => {
            alert('Transaction Successfull')
            console.log(details);
            this.cart.clearCart()
            this.route.navigateByUrl('/')
          }
        }
      )

    })
    


    




  }

}
