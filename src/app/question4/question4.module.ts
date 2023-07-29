import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question4RoutingModule } from './question4-routing.module';
import { Question4Component } from './question4.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';


@NgModule({
  declarations: [
    Question4Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
    CommonModule,
    Question4RoutingModule
  ]
})
export class Question4Module { }
