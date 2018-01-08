import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { ClearDropdownDirective } from './clear-dropdown.directive';
import {DropdownComponent} from "./component/dropdown-pattern/dropdown.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ClearDropdownDirective,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
