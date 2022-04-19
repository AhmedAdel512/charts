import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.css']
})
export class DatePickerRangeComponent implements OnInit {

  @Output() public startDate = new EventEmitter<string>();
  @Output() public endDate = new EventEmitter<string>();
  public from = null;
  public to = null;

  constructor() { }

  ngOnInit(): void {
  }

  getStartDate(value) {
    this.startDate.emit(value);
  }
  getEndDate(value) {
    this.endDate.emit(value);    
  }

}
