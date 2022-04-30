import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component';
import { ManageDashboardPageComponent } from './pages/manage-dashboard-page/manage-dashboard-page.component';

const routes: Routes = [
  { path: '', component: ManageDashboardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
