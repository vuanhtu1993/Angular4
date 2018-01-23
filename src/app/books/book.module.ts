import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BooksComponent} from './books.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book-list/book-list.component';
import {ManageBookComponent} from './manage-book/manage-book.component';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    BookListComponent,
    ManageBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class BookModule {}
