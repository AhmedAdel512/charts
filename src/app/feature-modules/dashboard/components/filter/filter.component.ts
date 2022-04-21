import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() public filterValue = new EventEmitter<string>();
  @Input() searchQuery:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event) {
    this.filterValue.emit(event.value)
  }

}
