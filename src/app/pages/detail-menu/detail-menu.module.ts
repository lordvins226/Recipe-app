import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMenuPageRoutingModule } from './detail-menu-routing.module';

import { DetailMenuPage } from './detail-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMenuPageRoutingModule
  ],
  declarations: [DetailMenuPage]
})
export class DetailMenuPageModule {}
