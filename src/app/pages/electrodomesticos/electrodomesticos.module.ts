import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrodomesticosPageRoutingModule } from './electrodomesticos-routing.module';

import { ElectrodomesticosPage } from './electrodomesticos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectrodomesticosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ElectrodomesticosPage]
})
export class ElectrodomesticosPageModule {}
