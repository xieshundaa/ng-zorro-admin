import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysRoutingModule } from './sys-routing.module';
import { SysComponent } from './sys.component';
import { RouteComponent } from './route/route.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    SysRoutingModule
  ],
  declarations: [SysComponent, RouteComponent, RouteDetailComponent]
})
export class SysModule { }
