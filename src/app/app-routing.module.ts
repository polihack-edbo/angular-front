import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: 'access', loadChildren: './access/access.module#AccessModule'},
  { path: 'app', loadChildren: './platform/platform.module#PlatformModule',
    canActivate: [ AuthGuard ]},
  { path: '', pathMatch: 'full', redirectTo: 'access' },
  { path: '**', pathMatch: 'full', redirectTo: 'access' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
