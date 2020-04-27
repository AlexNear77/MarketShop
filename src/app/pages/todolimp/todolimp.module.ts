import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodolimpPageRoutingModule } from './todolimp-routing.module';

import { TodolimpPage } from './todolimp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodolimpPageRoutingModule
  ],
  declarations: [TodolimpPage]
})
export class TodolimpPageModule {}
