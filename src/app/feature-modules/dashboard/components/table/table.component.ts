import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {


  @Input() tableHeaderNames: string[];
  @Input() headers: any[]
  @Input() showFirstLastButtons: boolean;
  @Input() sort: MatSort;
  @Input() tableData: any[];
  @Output() public sortState = new EventEmitter<Event>();
  public displayedColumns: string[];


  constructor() { 
  }
  ngOnInit(): void {
    this.displayedColumns = this.headers.map(col=> col.key)
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    this.sortState.emit(sortState)
  }

}
