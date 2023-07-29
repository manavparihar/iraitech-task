import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question1RoutingModule } from './question1-routing.module';
import { Question1Component } from './question1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Question1Component
  ],
  imports: [
    CommonModule,
    Question1RoutingModule,
    FormsModule
  ]
})
export class Question1Module { }
