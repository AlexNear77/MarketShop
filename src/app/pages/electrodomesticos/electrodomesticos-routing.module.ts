import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrodomesticosPage } from './electrodomesticos.page';

const routes: Routes = [
  {
    path: '',
    component: ElectrodomesticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectrodomesticosPageRoutingModule {}
