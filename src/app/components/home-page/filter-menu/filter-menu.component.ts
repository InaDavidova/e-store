import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  @Input() brands!:Set<string>;
  @Input() colors!:Set<string>;
  @Output() find = new EventEmitter<any>();
    
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(event: any) {
    this.find.emit(event)
  }

}
