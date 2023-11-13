import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrlistPage } from './qrlist.page';

const routes: Routes = [
  {
    path: '',
    component: QrlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrlistPageRoutingModule {}
