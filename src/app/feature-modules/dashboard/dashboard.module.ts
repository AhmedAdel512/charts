import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerRangeComponent } from './components/date-picker-range/date-picker-range.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MultipleSelectionComponent } from './components/multiple-selection/multiple-selection.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent,
    BoxesComponent,
    TableComponent,
    DatePickerRangeComponent,
    MultipleSelectionComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatSortModule
  ],
  providers: [
    DatePipe
  ],
})
export class DashboardModule { }
