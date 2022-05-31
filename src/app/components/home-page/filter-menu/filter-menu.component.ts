import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  @Input() brands!:Set<string>;
  @Input() colors!:Set<string>;
  @Input() onFilter!: Function;
  // @Input('ngModel') model: any;
    
  constructor() { }

  ngOnInit(): void {

  }

}
