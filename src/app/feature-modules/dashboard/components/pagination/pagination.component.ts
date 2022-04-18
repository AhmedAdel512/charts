import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // MatPaginator Inputs
  @Input() totalPages: number;
  @Input() pageSize: number;
  @Input() pageNumber: number;
  @Input() length: any[]
  @Input() pageSizeOptions: number[]

  @Input() pagination = {
    pageIndex: 1,
    pageSize: 1,
    totalPages: 1,
    totalItems: 1,
    pageSizeOptions:null
  }

  // MatPaginator Output
  // pageEvent: PageEvent;

  @Output() pageChange = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit(): void {
    // to change paginator labels
    this.paginator._intl.itemsPerPageLabel = 'Show'
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }

}
