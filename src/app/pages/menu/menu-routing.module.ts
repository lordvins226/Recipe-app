import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/menu/liste-menu'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'liste-menu',
        loadChildren: () => import('src/app/pages/liste-menu/liste-menu.module').then(m => m.ListeMenuPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
