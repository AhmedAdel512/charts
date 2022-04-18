import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class ManageDashboardPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  totalPages: number = 5;
  pageSize: number = 2;
  pageNumber: number = 1;

  tableHeaderNames: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  ];

  filterResult: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  ];

  toppingList: string[] = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
  ];

  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)',
    },
    {
      // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)',
    },
  ];

  public list_product = new MatTableDataSource<PeriodicElement>(
    this.dataSource
  );

  pieChartCompaniesData: ChartData<'pie', number[], string | string[]> = {
    // labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    labels: ['Flairstech', 'A', 'B', 'c'],
    datasets: [
      {
        data: [100, 200, 300, 400],
        backgroundColor: [
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
          'rgb(21,76,121)',
        ],
        hoverBackgroundColor: [
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
          'rgb(21,76,121)',
        ],
        hoverBorderColor: [
          '#6FC8Ce',
          'rgba(50, 73, 87, 0.5)',
          'rgba(26, 163, 255, 0.5)',
          'rgb(21,76,121)',
        ],
      },
    ],
  };
  ngAfterViewInit() {
    console.log(this.paginator);
    this.list_product.paginator = this.paginator;
  }

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

  constructor(
    private _oAuthService: AuthService,
    private datePipe: DatePipe,
    private _liveAnnouncer: LiveAnnouncer
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.flag = true;
    }, 500);
  }

  // ngAfterViewInit() {
  //   console.log(this.list_product)
  //   console.log(this.paginator)
  //   this.list_product.paginator = this.paginator;
  // }

  pieChartSendDate(value) {
    if (value.length > 0) {
      console.log(value[0].element.$context.raw);
      console.log(this.barChartData.labels[value[0].index]);
    }
  }

  barChartSendData(value) {
    if (value.length > 0) {
      console.log(value[0].element.$context.raw);
      console.log(this.barChartData.labels[value[0].index]);
    }
  }

  startDate(value) {
    let x = this.datePipe.transform(value, 'yyyy-MM-dd');
    console.log(x);
  }

  endDate(value) {
    let x = this.datePipe.transform(value, 'yyyy-MM-dd');
    console.log(x);
  }

  selectionDataFromToppingList(value) {
    if (value.length == 0) {
      this.filterResult = this.dataSource;
    } else {
      this.filterResult = this.dataSource.filter((data) => {
        return value.some((v) => {
          return v === data.name;
        });
      });
    }
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

  sortState(value) {
    console.log(value);
    if (value.direction) {
      this._liveAnnouncer.announce(`Sorted ${value.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterValue(value) {
    this.filterResult = this.dataSource.filter((data) =>
      data.name.toLowerCase().includes(value.trim().toLowerCase())
    );
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

  logOut() {
    this._oAuthService.logout();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
