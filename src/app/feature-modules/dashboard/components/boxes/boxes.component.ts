import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  @Input() title;
  @Input() value;
  @Input() bgColor;
  @Input() textColor;
  constructor() { }

  ngOnInit(): void {
  }

}
