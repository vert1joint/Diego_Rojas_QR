import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneratePageRoutingModule } from './qrgenerate-routing.module';

import { QrgeneratePage } from './qrgenerate.page';

import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrgeneratePageRoutingModule
  ],
  declarations: [QrgeneratePage]
})
export class QrgeneratePageModule {}
