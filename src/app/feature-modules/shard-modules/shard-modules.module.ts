import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from '../requests/requests/requests.component';
import { NavBarComponent } from '../dashboard/components/nav-bar/nav-bar.component';
import { FilterComponent } from '../dashboard/components/filter/filter.component';
import { PaginationComponent } from '../dashboard/components/pagination/pagination.component';
import { MultipleSelectionComponent } from '../dashboard/components/multiple-selection/multiple-selection.component';
import { DatePickerRangeComponent } from '../dashboard/components/date-picker-range/date-picker-range.component';
import { TableComponent } from '../dashboard/components/table/table.component';
import { BoxesComponent } from '../dashboard/components/boxes/boxes.component';
import { ManageDashboardPageComponent } from '../dashboard/pages/manage-dashboard-page/manage-dashboard-page.component';
import { BarChartComponent } from '../dashboard/components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../dashboard/components/pie-chart/pie-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent,
    BoxesComponent,
    TableComponent,
    DatePickerRangeComponent,
    MultipleSelectionComponent,
    PaginationComponent,
    FilterComponent,
    NavBarComponent,
    RequestsComponent
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
    MatSortModule,
    MatIconModule,
    NgSelectModule
  ],
  exports: [
    PieChartComponent,
    BarChartComponent,
    ManageDashboardPageComponent,
    BoxesComponent,
    TableComponent,
    DatePickerRangeComponent,
    MultipleSelectionComponent,
    PaginationComponent,
    FilterComponent,
    NavBarComponent,
    RequestsComponent
  ]
})
export class ShardModulesModule { }
