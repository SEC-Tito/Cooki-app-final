import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animal2PageRoutingModule } from './animal2-routing.module';

import { Animal2Page } from './animal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animal2PageRoutingModule
  ],
  declarations: [Animal2Page]
})
export class Animal2PageModule {}
