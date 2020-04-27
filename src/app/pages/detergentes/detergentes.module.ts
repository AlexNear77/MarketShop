import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetergentesPageRoutingModule } from './detergentes-routing.module';

import { DetergentesPage } from './detergentes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetergentesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetergentesPage]
})
export class DetergentesPageModule {}
