import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinosPage } from './vinos.page';

const routes: Routes = [
  {
    path: '',
    component: VinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinosPageRoutingModule {}
