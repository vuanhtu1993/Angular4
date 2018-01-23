import {NgModule} from '@angular/core';
import {BooksComponent} from './books.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book-list/book-list.component';
import {ManageBookComponent} from './manage-book/manage-book.component';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    BookListComponent,
    ManageBookComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}
