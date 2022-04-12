import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ManageDashboardPageComponent } from './pages/manage-dashboard-page/manage-dashboard-page.component';
import { NgChartsModule } from 'ng2-charts';
import { BoxesComponent } from './components/boxes/boxes.component';

@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent,
    BoxesComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
