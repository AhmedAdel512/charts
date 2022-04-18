import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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
  @Output() public filterValue = new EventEmitter<string>();
  @Output() public sortState = new EventEmitter<Event>();



  constructor(private _liveAnnouncer: LiveAnnouncer) { }


  applyFilter(event) {
    this.filterValue.emit(event.value)
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    console.log(sortState);
    this.sortState.emit(sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getDate(value) {
    console.log(value);
  }
}
