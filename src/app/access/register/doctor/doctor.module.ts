import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from './component/doctor.component';
import {DoctorRoutingModule} from './doctor-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
