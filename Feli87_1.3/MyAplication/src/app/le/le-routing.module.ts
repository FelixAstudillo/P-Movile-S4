import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LePage } from './le.page';

const routes: Routes = [
  {
    path: '',
    component: LePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LePageRoutingModule {}
