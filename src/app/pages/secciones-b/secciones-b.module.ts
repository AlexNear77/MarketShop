import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionesBPageRoutingModule } from './secciones-b-routing.module';

import { SeccionesBPage } from './secciones-b.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionesBPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeccionesBPage]
})
export class SeccionesBPageModule {}
