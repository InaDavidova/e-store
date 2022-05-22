import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
