import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrrecordPage } from './qrrecord.page';

const routes: Routes = [
  {
    path: '',
    component: QrrecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrrecordPageRoutingModule {}
