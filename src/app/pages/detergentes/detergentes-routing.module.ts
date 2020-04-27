import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetergentesPage } from './detergentes.page';

const routes: Routes = [
  {
    path: '',
    component: DetergentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetergentesPageRoutingModule {}
