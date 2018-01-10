import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ActiveBookComponent } from './component/active-book/active-book.component';
import { InactiveBookComponent } from './component/inactive-book/inactive-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveBookComponent,
    InactiveBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
