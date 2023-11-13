import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecpcontraPage } from './recpcontra.page';

const routes: Routes = [
  {
    path: '',
    component: RecpcontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecpcontraPageRoutingModule {}
