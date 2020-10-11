import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMenuPage } from './detail-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMenuPageRoutingModule {}
