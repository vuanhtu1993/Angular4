import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './reducer/todo.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
