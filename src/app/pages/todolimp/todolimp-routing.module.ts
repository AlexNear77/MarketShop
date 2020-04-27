import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodolimpPage } from './todolimp.page';

const routes: Routes = [
  {
    path: '',
    component: TodolimpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodolimpPageRoutingModule {}
