import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ManageDashboardPageComponent } from './pages/manage-dashboard-page/manage-dashboard-page.component';
import { NgChartsModule } from 'ng2-charts';
import { BoxesComponent } from './components/boxes/boxes.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent,
    BoxesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule { }
