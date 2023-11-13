import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLogPageRoutingModule } from './select-log-routing.module';

import { SelectLogPage } from './select-log.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLogPageRoutingModule
  ],
  declarations: [SelectLogPage]
})
export class SelectLogPageModule {}
