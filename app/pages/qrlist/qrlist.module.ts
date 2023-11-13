import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrlistPageRoutingModule } from './qrlist-routing.module';

import { QrlistPage } from './qrlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrlistPageRoutingModule
  ],
  declarations: [QrlistPage]
})
export class QrlistPageModule {}
