import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminDashbroadComponent} from './admin-dashbroad/admin-dashbroad.component';
import {ManageHeroesComponent} from './manage-heroes/manage-heroes.component';
import {ManageCrisesComponent} from './manage-crises/manage-crises.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashbroadComponent,
    ManageHeroesComponent,
    ManageCrisesComponent,
  ],
})
export class AdminModule {}
