import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LNPageRoutingModule } from './ln-routing.module';

import { LNPage } from './ln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LNPageRoutingModule
  ],
  declarations: [LNPage]
})
export class LNPageModule {}
