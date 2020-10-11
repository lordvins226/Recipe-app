import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMenuPage } from './liste-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMenuPageRoutingModule {}
