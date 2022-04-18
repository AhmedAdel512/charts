import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-manage-dashboard-page',
  templateUrl: './manage-dashboard-page.component.html',
  styleUrls: ['./manage-dashboard-page.component.css'],
})
export class ManageDashboardPageComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  
  totalPages: number = 5;
  pageSize: number = 2;
  pageNumber: number = 1;
  dataSource: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      date: '2022-02-17T22:00:00.184Z',
    },
    {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      date: '2022-02-18T22:00:00.184Z',
    },
    {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      date: '2022-02-12T22:00:00.184Z',
    },
    {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      date: '2022-02-10T22:00:00.184Z',
    },
    {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B',
      date: '2022-02-01T22:00:00.184Z',
    },
    {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      date: '2022-02-05T22:00:00.184Z',
    },
    {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      date: '2022-04-06T22:00:00.184Z',
    },
    {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      date: '2022-04-12T22:00:00.184Z',
    },
    {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      date: '2022-04-11T22:00:00.184Z',
    },
    {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      date: '2022-06-10T22:00:00.184Z',
    },
    {
      position: 11,
      name: 'Sodium',
      weight: 22.9897,
      symbol: 'Na',
      date: '2022-08-15T22:00:00.184Z',
    },
    {
      position: 12,
      name: 'Magnesium',
      weight: 24.305,
      symbol: 'Mg',
      date: '2022-09-03T22:00:00.184Z',
    },
    {
      position: 13,
      name: 'Aluminum',
      weight: 26.9815,
      symbol: 'Al',
      date: '2022-01-05T22:00:00.184Z',
    },
    {
      position: 14,
      name: 'Silicon',
      weight: 28.0855,
      symbol: 'Si',
      date: '2022-03-06T22:00:00.184Z',
    },
    {
      position: 15,
      name: 'Phosphorus',
      weight: 30.9738,
      symbol: 'P',
      date: '2022-06-07T22:00:00.184Z',
    },
    {
      position: 16,
      name: 'Sulfur',
      weight: 32.065,
      symbol: 'S',
      date: '2022-01-08T22:00:00.184Z',
    },
    {
      position: 17,
      name: 'Chlorine',
      weight: 35.453,
      symbol: 'Cl',
      date: '2022-11-09T22:00:00.184Z',
    },
    {
      position: 18,
      name: 'Argon',
      weight: 39.948,
      symbol: 'Ar',
      date: '2022-12-09T22:00:00.184Z',
    },
    {
      position: 19,
      name: 'Potassium',
      weight: 39.0983,
      symbol: 'K',
      date: '2022-08-13T22:00:00.184Z',
    },
    {
      position: 20,
      name: 'Calcium',
      weight: 40.078,
      symbol: 'Ca',
      date: '2022-03-29T22:00:00.184Z',
    },
  ];

  pagination = {
    pageIndex: 0,
    pageSize: 5,
    totalPages: 2,
    totalItems: this.dataSource.length,
    pageSizeOptions: [5, 10, 20],
  };

  tableHeaderNames: string[] = ['position', 'name', 'weight', 'symbol', 'date'];

  filterResult = this.getItems([...this.dataSource]);

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
  paginationChanged(ev) {
    console.log('pagination changed', ev);
    this.pagination = {
      ...this.pagination,
      ...ev,
      totalPages: Math.floor(ev.length / ev.pageSize),
    };
    this.filterResult = this.getItems([...this.dataSource]);
  }

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

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010'],
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

  selectionDataFromToppingList(value: any[]) {
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
    this.filterResult = [];
    let arr = [...this.dataSource];
    if (value.direction == 'asc') {
      this.filterResult = arr.sort((a, b) => (a.name < b.name ? -1 : 1));
      console.log('in asc');
    } else if (value.direction == 'desc') {
      console.log('in desc');
      this.filterResult = arr.sort((a, b) => (a.name > b.name ? -1 : 1));
    } else {
      this.filterResult = this.dataSource;
    }
    // this.getItems(this.filterResult)
    this.filterResult = this.getItems(this.filterResult)
  }

  filterValue(value) {
    this.filterResult = this.dataSource.filter((data) =>
      data.name.toLowerCase().includes(value.trim().toLowerCase())
    );
  }

  public getItems(arr: any[]) {
    let start = this.pagination.pageSize * this.pagination.pageIndex;
    let end = start + this.pagination.pageSize;
    let result = arr.slice(start, end);
    console.log(result)
    return [...result];
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
  date: string;
}
