import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './component/patient.component';
import {PatientRoutingModule} from './patient-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
