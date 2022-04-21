import { Component, OnInit } from '@angular/core';
import { STATUS_ENUM } from './../../models/helper'
import { ChartData } from 'chart.js';
import { AuthService } from 'src/app/shared/service/auth.service';
import * as DB from '../../../../../db';

@Component({
  selector: 'app-manage-dashboard-page',
  templateUrl: './manage-dashboard-page.component.html',
  styleUrls: ['./manage-dashboard-page.component.css'],
})
export class ManageDashboardPageComponent implements OnInit {
  public headers: any[] = [
    {
      label: 'Name',
      key: 'fullName'
    },
    {
      label: 'Title',
      key: 'title'
    },
    {
      label: 'Email',
      key: 'email'
    },
    {
      label: 'Status',
      key: 'idle'
    },
    {
      label: 'Date',
      key: 'date'
    },
  ]
  public data: any[] = DB.ACCOUNTS[0].employees

  public filterResult = []

  public flag: boolean = false; // flag to swipe up 
  /*___________________ Filtration ____________________*/
  public filtration = {
    searchQuery: '',
    from: null,
    to: null,
    types: [],
    sort: ''
  }


  /*___________________ pagination ____________________*/

  pagination = {
    pageIndex: 0,
    pageSize: 5,
    totalItems: this.data.length,
    pageSizeOptions: [5, 10, 20],
  };


  dropdownList: string[] = ['Active', 'Not Active']



  public pieChartClientsData: ChartData<'pie', number[], string | string[]> = DB.CLIENTS
  public barChartPortfolios: ChartData<'bar'> = { ...DB.ACCOUNTS[0].portfolios }
  public boxes: any[] = DB.ACCOUNTS[0].info
  public client: string = DB.ACCOUNTS[0].client
  public bgColor: string = DB.ACCOUNTS[0].bgColor
  public textColor: string = DB.ACCOUNTS[0].textColor
  constructor(
    private _oAuthService: AuthService,

  ) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.flag = true;
    }, 500);

    this.filterResult = this.paginateTableData(this.data);
  }
  /* ___________ Chart Functions ___________*/

  public pieChartSendDate(value) {
    if (value.length > 0) {
      let account = DB.ACCOUNTS.find(account => account.client == DB.CLIENTS.labels[value[0].index]);
      if (account) {
        this.client = account.client;
        this.data = [...account.employees];
        this.boxes = [...account.info];
        this.bgColor = account.bgColor
        this.textColor = account.textColor
        this.barChartPortfolios = { ...account.portfolios };

        this.pagination = {
          ...this.pagination,
          pageIndex: 0,
          totalItems: this.data.length,
          pageSize: 5
        }
        this.resetFiltration();
        this.getTableData()
      }
    }
  }

  public barChartSendData(value) {
    if (value.length > 0) {
      let chartTitle = this.barChartPortfolios.datasets[value[0].datasetIndex].label;
      let year = +this.barChartPortfolios.labels[value[0].index];
      this._barChartYearChanged(chartTitle, year)
    }
  }


  private _barChartYearChanged(chartTitle: string, year: number) {
    let client = DB.ACCOUNTS.find(account => account.client == this.client);
    client.accountInfoByYear.map(data => {
      if (data.year == year) {
        this.boxes = [...data.boxes]
      }
    })
    let tableData = [...client.employees];
    // Filter table data with Title
    tableData = tableData.filter(emp => emp.title.includes(chartTitle));
    // Filter table data with Date
    tableData = tableData.filter(emp => year == new Date(emp.date).getFullYear())
    this.data = tableData;
    this.resetFiltration();
    this.getTableData()
  }

  public resetFiltration() {
    this.filtration = {
      ...this.filtration,
      types: [],
      searchQuery: '',
      from: null,
      to: null
    }
  }



  /* ___________ Table Functions ___________*/


  paginationChanged(ev: any) {
    this.pagination = {
      ...this.pagination,
      ...ev,
    };
    this.getTableData(false)
  }

  public startDate(value: string) {
    const date = value ? new Date(value).toISOString() : null
    this.filtration = {
      ...this.filtration,
      from: date
    }
  }

  public endDate(value: string) {
    let date = null;
    if (value) {
      date = new Date(value);
      date.setDate(date.getDate() + 1);
      date = date.toISOString()
    }
    this.filtration = {
      ...this.filtration,
      to: date
    }
    if (value) this.getTableData()
  }


  public getTableData(resetPagination: boolean = true) {
    let result = [...this.data];
    // searchQueryFiltration functionality
    result = result.filter((data) =>
      data.fullName.toLowerCase().includes(this.filtration.searchQuery.trim().toLowerCase())
    );

    // Types Filtration functionality
    if (this.filtration.types.length > 0) {
      result = result.filter(data => this.filtration.types.some(type => STATUS_ENUM[type] === data.idle))
    }

    // sortingFiltration functionality
    if (this.filtration.sort == 'asc') {
      result = result.sort((a, b) => (a.fullName < b.fullName ? -1 : 1));
    } else if (this.filtration.sort == 'desc') {
      result = result.sort((a, b) => (a.fullName > b.fullName ? -1 : 1));
    }
    // Date Filtration functionality
    if (this.filtration.to) {
      result = result.filter(data => new Date(data.date).toISOString() >= this.filtration.from && new Date(data.date).toISOString() < this.filtration.to)
    }
    if (resetPagination) {

      this.pagination = {
        ...this.pagination,
        pageIndex: 0,
      }
    }
    this.filterResult = this.paginateTableData(result)
  }

  public multipleSelectionChange(value: any[]) {
    this.filtration = {
      ...this.filtration,
      types: value
    }
    this.getTableData()
  }



  public onTableHeaderSortChange(value) {
    this.filtration = {
      ...this.filtration,
      sort: value.direction
    }
    this.getTableData();
  }

  public onSearchChange(value) {
    this.filtration = {
      ...this.filtration,
      searchQuery: value ? value.trim().toLowerCase() : ''
    }
    this.getTableData()
  }

  public paginateTableData(arr: any[]) {
    this.pagination = {
      ...this.pagination,
      totalItems: arr.length
    }
    let start = this.pagination.pageSize * this.pagination.pageIndex;
    let end = start + this.pagination.pageSize;
    let result = arr.slice(start, end);
    return [...result];
  }



  logOut() {
    this._oAuthService.logout();
  }
}
