import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {StoreModule} from '@ngrx/store';
import { CountingComponent } from './redux/counting/counting.component';
import {CurrencyModule} from './currency/currency.module';
import { TodoComponent } from './todoApp/todo/todo.component';
import {TodoReducer} from './todoApp/store/todo.reducer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountingComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todo: TodoReducer}),
    CurrencyModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
