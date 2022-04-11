import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ManageDashboardPageComponent } from './pages/manage-dashboard-page/manage-dashboard-page.component';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
