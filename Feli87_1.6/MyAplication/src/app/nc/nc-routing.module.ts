import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NcPage } from './nc.page';

const routes: Routes = [
  {
    path: '',
    component: NcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NcPageRoutingModule {}
