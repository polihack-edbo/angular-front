import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './component/container.component';
import {ContainerRoutingModule} from './container-routing.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
