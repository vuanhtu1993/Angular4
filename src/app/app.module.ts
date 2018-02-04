import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './redux/couter';
import { CountingComponent } from './redux/counting/counting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountingComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
