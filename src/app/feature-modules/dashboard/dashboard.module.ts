import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ShardModulesModule } from '../shard-modules/shard-modules.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ShardModulesModule],
  providers: [DatePipe],
})
export class DashboardModule {}
