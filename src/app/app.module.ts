import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './component/hero/hero.component';
import { HeaderComponent } from './component/header/header.component';
import { AddHeroComponent } from './component/add-hero/add-hero.component';
import { HeroDetailComponent } from './component/hero/hero-detail/hero-detail.component';
import {MessageService} from "./message.service";


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    AddHeroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
