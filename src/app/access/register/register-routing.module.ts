import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './component/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: 'select', loadChildren: './container/container.module#ContainerModule'},
      { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorModule'},
      { path: 'patient', loadChildren: './patient/patient.module#PatientModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegisterRoutingModule { }
