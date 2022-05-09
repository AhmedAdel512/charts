import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() title: string = 'Pie Chart';
  @Input() bgColor: string = 'bg-gradient-teal';
  @Input() pieChartData: ChartData<'pie'> = { datasets: [], labels: [] };
  @Input() enableRemove: boolean = false;
  @Input() enableMinimize: boolean = true;
  @Input() minHeight: number = 250;
  @Output() public pieChartSendDate = new EventEmitter<Event>();
  // @Input() ChartType: ChartType
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}

  chartClicked(ev: any) {
    console.log(ev);
  }

  public pieChartClick(ev: any) {
    if (ev.length > 0) {
      this.pieChartSendDate.emit(ev);
    }
  }
}
