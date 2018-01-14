import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {ManageHeroesComponent} from './manage-heroes/manage-heroes.component';
import {ManageCrisesComponent} from './manage-crises/manage-crises.component';
import {AdminDashbroadComponent} from './admin-dashbroad/admin-dashbroad.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
    {path: 'crises', component: ManageCrisesComponent},
    {path: 'heroes', component: ManageHeroesComponent},
    {path: '', component: AdminDashbroadComponent}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
