import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeroModule } from './component/hero-list/hero.module';
import { HomeComponent } from './component/home/home.component';
import {CrisisModule} from './component/crisis-list/crisis.module';
import { AdminDashBroadComponent } from './admin/admin-dash-broad/admin-dash-broad.component';
import { AdminDashbroadComponent } from './admin/admin-dashbroad/admin-dashbroad.component';
import { ManageCrisesComponent } from './admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    AdminDashBroadComponent,
    AdminDashbroadComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    CrisisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
