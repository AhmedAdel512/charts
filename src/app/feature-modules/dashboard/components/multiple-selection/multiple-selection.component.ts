import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.css']
})
export class MultipleSelectionComponent implements OnInit {

 toppings = new FormControl();
  @Input() toppingList: string[]
  @Output() public selectionDataFromToppingList = new EventEmitter<string[]>();


  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

  selectedData(data) {
    this.selectionDataFromToppingList.emit(data.value)
  }

}
