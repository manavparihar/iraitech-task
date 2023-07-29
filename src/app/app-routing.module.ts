import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ques1', loadChildren: () => import('./question1/question1.module').then(m => m.Question1Module) },
  { path: 'ques2', loadChildren: () => import('./question2/question2.module').then(m => m.Question2Module) },
  { path: 'ques3', loadChildren: () => import('./question3/question3.module').then(m => m.Question3Module) },
  { path: 'ques4', loadChildren: () => import('./question4/question4.module').then(m => m.Question4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
