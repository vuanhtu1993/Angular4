import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {HeroModule} from './component/hero-list/hero.module';
import {HomeComponent} from './component/home/home.component';
import {CrisisModule} from './component/crisis-list/crisis.module';
import {AdminModule} from './admin/admin.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import { LoginComponent } from './component/login/login.component';
import {LoginRoutingModule} from './component/login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    HeroModule,
    CrisisModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
