import { Component, OnInit, Input } from '@angular/core';
import { TProduct } from 'src/app/shared/api.service';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.css']
})

export class PhoneCardComponent implements OnInit {

  @Input() data!:TProduct;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
