import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NcPageRoutingModule } from './nc-routing.module';

import { NcPage } from './nc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NcPageRoutingModule
  ],
  declarations: [NcPage]
})
export class NcPageModule {}
