import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LNPage } from './ln.page';

const routes: Routes = [
  {
    path: '',
    component: LNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LNPageRoutingModule {}
