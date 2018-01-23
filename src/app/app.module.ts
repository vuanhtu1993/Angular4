import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationModule} from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { ManageBookComponent } from './books/manage-book/manage-book.component';
import {AuthGuard} from './guard/authGuard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookComponent,
    BookListComponent,
    ManageBookComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
