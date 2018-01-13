import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HeroService} from './hero.service';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService
  ],
})
export class HeroModule {
}

