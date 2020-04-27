import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinosPageRoutingModule } from './vinos-routing.module';

import { VinosPage } from './vinos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VinosPage]
})
export class VinosPageModule {}
