import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {}

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
