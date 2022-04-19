import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.css']
})
export class DatePickerRangeComponent {

  @Output() public startDate = new EventEmitter<string>();
  @Output() public endDate = new EventEmitter<string>();
  @Input() label: string = 'Enter a date Range'
  constructor() { }

  getStartDate(value) {
    this.startDate.emit(value);
  }
  getEndDate(value) {
    this.endDate.emit(value);
  }

}
