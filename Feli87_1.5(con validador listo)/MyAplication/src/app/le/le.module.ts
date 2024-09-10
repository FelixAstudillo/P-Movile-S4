import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LePageRoutingModule } from './le-routing.module';
import { LePage } from './le.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LePageRoutingModule
  ],
  declarations: [LePage]
})
export class LePageModule {}
