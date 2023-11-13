import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarAlumPage } from './iniciar-alum.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarAlumPageRoutingModule {}
