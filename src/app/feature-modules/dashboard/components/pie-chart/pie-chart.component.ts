import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() title: string;
  @Input() companiesData: ChartData;

  @Output() public sendCompanyName = new EventEmitter<string>();
  @Output() public sendCompanyData = new EventEmitter<number>();
  // @Input() ChartType: ChartType

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}

  // public pieChartLegend = true;

  // Pie
  // public pieChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //     },
  //   },
  // };
  // public pieChartData: ChartData<'pie', number[], string | string[]> = {

  //   labels: [],
  //   datasets: [
  //     {
  //       data: [],
  //       backgroundColor: [
  //         'black',
  //         'rgba(50, 73, 87, 0.5)',
  //         'rgba(26, 163, 255, 0.5)',
  //       ],
  //     },
  //   ],
  // };

  chartClicked(ev: any) {
    console.log(ev);
  }

  public pieChartClick(ev: any) {
    if (ev.length > 0) {
      let chartIndex = ev[0].index;
      let companyName: any = this.companiesData.labels[chartIndex];
      let companyData: any = this.companiesData.datasets[0].data[chartIndex];
      console.log(
        this.companiesData.labels[chartIndex],
        this.companiesData.datasets[0].data[chartIndex]
      );
      this.sendCompanyName.emit(companyName);
      this.sendCompanyData.emit(companyData);
    }
  }
}
