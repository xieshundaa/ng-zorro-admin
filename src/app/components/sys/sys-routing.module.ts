import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysComponent } from './sys.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {
    path: '',
    component: SysComponent,
    children: [
      {
        path: '',
        redirectTo: 'route',
        pathMatch: 'full'
      },
      {
        path: 'route',
        component: RouteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
