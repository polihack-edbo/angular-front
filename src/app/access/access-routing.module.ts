import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessComponent} from './component/access.component';

const routes: Routes = [
  {
    path: '',
    component: AccessComponent,
    children: [
      { path: 'login', loadChildren: './login/login.module#LoginModule'},
      { path: 'register', loadChildren: './register/register.module#RegisterModule'},
      { path: '', pathMatch: 'full', redirectTo: 'login' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
