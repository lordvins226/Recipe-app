import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMenuPageRoutingModule } from './liste-menu-routing.module';

import { ListeMenuPage } from './liste-menu.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ListeMenuPageRoutingModule
  ],
  declarations: [ListeMenuPage]
})
export class ListeMenuPageModule {}
