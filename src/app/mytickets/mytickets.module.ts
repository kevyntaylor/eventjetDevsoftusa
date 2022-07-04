import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyticketsPageRoutingModule } from './mytickets-routing.module';

import { MyticketsPage } from './mytickets.page';
import { MenuPrincipalComponent } from '../components/menu-principal/menu-principal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyticketsPageRoutingModule
  ],
  declarations: [MyticketsPage,MenuPrincipalComponent]
})
export class MyticketsPageModule {}
