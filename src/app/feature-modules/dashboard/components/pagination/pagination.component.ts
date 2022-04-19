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

  @Input() pagination = {
    pageIndex: 1,
    pageSize: 1,
    totalItems: 1,
    pageSizeOptions: null
  }

  @Output() pageChange = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit(): void {
    // to change paginator labels
    if (this.paginator) this.paginator._intl.itemsPerPageLabel = 'Show'
  }

}
