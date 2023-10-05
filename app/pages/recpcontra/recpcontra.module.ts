import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecpcontraPageRoutingModule } from './recpcontra-routing.module';

import { RecpcontraPage } from './recpcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecpcontraPageRoutingModule
  ],
  declarations: [RecpcontraPage]
})
export class RecpcontraPageModule {}
