import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarAlumPageRoutingModule } from './iniciar-alum-routing.module';

import { IniciarAlumPage } from './iniciar-alum.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IniciarAlumPageRoutingModule
  ],
  declarations: [IniciarAlumPage]
})
export class IniciarAlumPageModule {}
