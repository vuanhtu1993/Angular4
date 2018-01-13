import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeroModule } from './component/hero-list/hero.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrisisListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
