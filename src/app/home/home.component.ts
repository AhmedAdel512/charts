import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessToken
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: Label[] = [
  //   ['Download'],
  //   ['Sales'],
  //   'Mail Sales',
  // ];
  public flag:boolean = false
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];
  // public pieChartLegend = true;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    // labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: ['Flairstech', 'A', 'B'],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: [
          'black',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
        ],
      },
    ],
  };

  // events
  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    // console.log(event , 'event', active);
  }

  chartClicked(ev: any) {
    console.log(ev);
  }
  public pieChartClick(ev: any) {
    if (ev.length > 0) {
      let chartIndex = ev[0].index;
      console.log(
        this.pieChartData.labels[chartIndex],
        this.pieChartData.datasets[0].data[chartIndex]
      );
    }
  }
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Flairstech' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: ' A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: ' B' },
    ],
  };
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  constructor(private _oAuthService:AuthService

    ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.flag = true
    }, 500);
  //   let loader = document.getElementById('loader');
  //   console.log(loader)
  //   window.addEventListener ("load", function() {
  //     loader.style.height = '0px'
  // });
  }

  logOut() {
    this._oAuthService.logout();
  }

}
