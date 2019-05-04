import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
