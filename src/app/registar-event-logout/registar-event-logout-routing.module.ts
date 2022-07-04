import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistarEventLogoutPage } from './registar-event-logout.page';

const routes: Routes = [
  {
    path: '',
    component: RegistarEventLogoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistarEventLogoutPageRoutingModule {}
