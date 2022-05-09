import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.css']
})
export class MultipleSelectionComponent implements OnInit {
  @Input() types = null
  @Input() list: string[]
  @Input() placeHolder: string;
  @Output() public onSelectChange = new EventEmitter<string[]>();



  constructor() { }

  ngOnInit(): void {
  }

  onSelectedData(data) {
    this.onSelectChange.emit(data)
  }


}
