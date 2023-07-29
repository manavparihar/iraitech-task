import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question4Component } from './question4.component';

const routes: Routes = [
  { path: '', component: Question4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question4RoutingModule { }
