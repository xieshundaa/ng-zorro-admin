import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysRoutingModule } from './sys-routing.module';
import { SysComponent } from './sys.component';
import { RouteComponent } from './route/route.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SysRoutingModule
  ],
  declarations: [SysComponent, RouteComponent]
})
export class SysModule { }
