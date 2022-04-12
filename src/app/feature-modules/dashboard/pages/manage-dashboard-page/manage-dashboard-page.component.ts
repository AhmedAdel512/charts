import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartType,
  ChartTypeRegistry,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-manage-dashboard-page',
  templateUrl: './manage-dashboard-page.component.html',
  styleUrls: ['./manage-dashboard-page.component.css'],
})
export class ManageDashboardPageComponent implements OnInit {

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];
    
  pieChartCompaniesData: ChartData<'pie', number[], string | string[]> = {
    // labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: ['Flairstech', 'A', 'B' , 'c'],
    datasets: [
      {
        data: [100, 200, 300 , 400],
        backgroundColor: [
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
          'rgb(21,76,121)'
        ],
        hoverBackgroundColor:[
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',          
          'rgb(21,76,121)'
        ],
        hoverBorderColor : [
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
          'rgb(21,76,121)'
        ]
      },
    ],
  };

  sendCompanyName(value) {
    console.log(value);
  }
  sendCompanyData(value) {
    console.log(value);
  }

  public pieChartClick(ev: any) {
    console.log(ev);
    if (ev.length > 0) {
      let chartIndex = ev[0].index;
      console.log(
        this.pieChartCompaniesData.labels[chartIndex],
        this.pieChartCompaniesData.datasets[0].data[chartIndex]
      );
    }
  }

  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: Label[] = [
  //   ['Download'],
  //   ['Sales'],
  //   'Mail Sales',
  // ];
  public flag: boolean = false;
  public pieChartType: ChartType = 'pie';
  // public pieChartPlugins = [];
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
  // public pieChartClick(ev: any) {
  //   if (ev.length > 0) {
  //     let chartIndex = ev[0].index;
  //     console.log(
  //       this.pieChartData.labels[chartIndex],
  //       this.pieChartData.datasets[0].data[chartIndex]
  //     );
  //   }
  // }

  public barChartData: ChartData<'bar'> = {
    labels: [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
    ],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Flairstech' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: ' A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: ' B' },
      { data: [68, 22, 11, 8, 15, 20, 70], label: ' d' },
      { data: [68, 22, 11, 8, 60, 10, 90], label: ' e' },
    ],
  };

  constructor(private _oAuthService: AuthService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.flag = true;
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

  public boxes: any[] = [
    {
      title: 'New Orders',
      value: '150',
      bgColor: 'red',
      textColor: 'text-white',
    },
    {
      title: 'Sales',
      value: '100%',
      bgColor: 'yellow',
      textColor: 'text-secondary',
    },
    {
      title: 'Clients',
      value: '800',
      bgColor: 'whitesmoke',
      textColor: 'text-info',
    },
  ];
}
