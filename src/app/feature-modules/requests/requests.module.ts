import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { ShardModulesModule } from '../shard-modules/shard-modules.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RequestsRoutingModule, ShardModulesModule],
})
export class RequestsModule {}
