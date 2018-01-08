import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DropdownDirective } from './dropdown.directive';
import {DropdownComponent} from './component/dropdown-pattern/dropdown.component';
import {ClickOutsideDirective} from './component/dropdown-pattern/click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    DropdownComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
