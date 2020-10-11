import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu/liste-menu',
    pathMatch: 'full'
  },
  // {
  //   path: 'liste-menu',
  //   loadChildren: () => import('./pages/liste-menu/liste-menu.module').then( m => m.ListeMenuPageModule)
  // },
  {
    path: 'detail-menu',
    loadChildren: () => import('./pages/detail-menu/detail-menu.module').then( m => m.DetailMenuPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./pages/photo/photo.module').then( m => m.PhotoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
