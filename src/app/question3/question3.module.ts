import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question3RoutingModule } from './question3-routing.module';
import { Question3Component } from './question3.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Question3Component
  ],
  imports: [
    CommonModule,
    Question3RoutingModule,
    ReactiveFormsModule
  ]
})
export class Question3Module { }
