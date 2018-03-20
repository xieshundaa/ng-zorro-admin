import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LeftnavComponent } from '../leftnav/leftnav.component';
import { HeaderComponent } from '../header/header.component';
import { SidemenuComponent } from '../leftnav/sidemenu/sidemenu.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    WorkspaceRoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    LeftnavComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ]
})
export class WorkspaceModule { }
