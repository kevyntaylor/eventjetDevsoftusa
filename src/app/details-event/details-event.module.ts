import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEventPageRoutingModule } from './details-event-routing.module';

import { DetailsEventPage } from './details-event.page';
import { MenuPrincipalComponent } from '../components/menu-principal/menu-principal.component';
import { NoSanitizePipePipe } from '../pipes/no-sanitize-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEventPageRoutingModule
  ],
  declarations: [DetailsEventPage,MenuPrincipalComponent,NoSanitizePipePipe]
})
export class DetailsEventPageModule {}
