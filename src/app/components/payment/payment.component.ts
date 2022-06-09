import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public amount: string = "0"
  public isEmpty: boolean = true
  public price: number = 0

  constructor(private cart: CartService, private route: Router) {

  }


  ngOnInit(): void {

    if (this.cart.placeholder.length != 0) {
      this.isEmpty = false
    }

    this.amount = localStorage.getItem('total_price')!

    console.log(this.amount);
    this.price = parseInt(this.amount)

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

  }

}
