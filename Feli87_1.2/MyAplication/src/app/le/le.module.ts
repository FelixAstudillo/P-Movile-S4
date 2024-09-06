import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LePageRoutingModule } from './le-routing.module';
import { LePage } from './le.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LePageRoutingModule
  ],
  declarations: [LePage]
})
export class LePageModule {}
