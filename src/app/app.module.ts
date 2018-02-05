import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducer/todo.reducer';
import { TodoComponent } from './component/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todoReducer}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
