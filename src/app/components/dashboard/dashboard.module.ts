import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
