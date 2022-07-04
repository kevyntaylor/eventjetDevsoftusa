import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistarEventLogoutPageRoutingModule } from './registar-event-logout-routing.module';

import { RegistarEventLogoutPage } from './registar-event-logout.page';
import { MenuPrincipalComponent } from '../components/menu-principal/menu-principal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistarEventLogoutPageRoutingModule
  ],
  declarations: [RegistarEventLogoutPage,MenuPrincipalComponent]
})
export class RegistarEventLogoutPageModule {}
