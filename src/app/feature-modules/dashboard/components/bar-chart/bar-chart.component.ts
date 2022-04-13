import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() title: string = 'Bar Chart';
  @Input() barChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  @Input() enableRemove: boolean = false;
  @Input() enableMinimize: boolean = true;

  public barChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}

  // public barChartData: ChartData<'bar'> = {
  //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Flairstech' },
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: ' A' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: ' B' },
  //   ],
  // };
  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //   },
  // };
}
