import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  // MatPaginator Inputs
  @Input() totalPages : number;
  @Input() pageSize : number;
  @Input() pageNumber : number;
  @Input() length: any[]
  @Input() pageSizeOptions: number[]

  // MatPaginator Output
  // pageEvent: PageEvent;

  @Output() pageChange = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }

}
