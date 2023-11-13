import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApinotiPageRoutingModule } from './apinoti-routing.module';

import { ApinotiPage } from './apinoti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApinotiPageRoutingModule
  ],
  declarations: [ApinotiPage]
})
export class ApinotiPageModule {}
