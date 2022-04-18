import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.css']
})
export class DatePickerRangeComponent implements OnInit {

  @Output() public startDate = new EventEmitter<string>();
  @Output() public endDate = new EventEmitter<string>();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
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
