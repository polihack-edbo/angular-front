import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginService} from '../../services/login/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoginRoutingModule
  ],
  providers: [ LoginService ]
})
export class LoginModule { }
