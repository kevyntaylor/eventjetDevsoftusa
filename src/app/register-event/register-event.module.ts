import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEventPageRoutingModule } from './register-event-routing.module';

import { RegisterEventPage } from './register-event.page';
import { MenuPrincipalComponent } from '../components/menu-principal/menu-principal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEventPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterEventPage,MenuPrincipalComponent]
})
export class RegisterEventPageModule {}
