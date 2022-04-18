import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {


  @Input() tableHeaderNames: string[];
  @Input() showFirstLastButtons: boolean;
  @Input() sort: MatSort;
  @Input() tableData: any[];
  @Output() public sortState = new EventEmitter<Event>();



  constructor() { }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    this.sortState.emit(sortState)
  }

}
