import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApinotiPage } from './apinoti.page';

const routes: Routes = [
  {
    path: '',
    component: ApinotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApinotiPageRoutingModule {}
