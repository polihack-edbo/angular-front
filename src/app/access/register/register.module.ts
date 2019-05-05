import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {FormsModule} from '@angular/forms';
import {RegisterService} from '../../services/register/register.service';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  providers: [ RegisterService ]
})
export class RegisterModule { }
