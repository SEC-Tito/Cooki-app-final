import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animal2Page } from './animal2.page';

const routes: Routes = [
  {
    path: '',
    component: Animal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animal2PageRoutingModule {}
