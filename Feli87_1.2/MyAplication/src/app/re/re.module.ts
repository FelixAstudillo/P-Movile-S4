import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RePageRoutingModule } from './re-routing.module';
import { RePage } from './re.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RePageRoutingModule
  ],
  declarations: [RePage]
})
export class RePageModule {}
