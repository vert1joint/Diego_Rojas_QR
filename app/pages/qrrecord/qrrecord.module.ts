import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrrecordPageRoutingModule } from './qrrecord-routing.module';

import { QrrecordPage } from './qrrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrrecordPageRoutingModule
  ],
  declarations: [QrrecordPage]
})
export class QrrecordPageModule {}
