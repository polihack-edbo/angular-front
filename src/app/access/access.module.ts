import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../components/angular-material/angular-material.module';

import {AccessRoutingModule} from './access-routing.module';

import { AccessComponent } from './component/access.component';

@NgModule({
  declarations: [
    AccessComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
