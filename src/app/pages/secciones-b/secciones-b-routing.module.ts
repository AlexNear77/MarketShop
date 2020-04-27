import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionesBPage } from './secciones-b.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionesBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionesBPageRoutingModule {}
