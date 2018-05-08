import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'sys',
        loadChildren: '../sys/sys.module#SysModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
