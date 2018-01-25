import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Book} from './book';


@Injectable()
export class BookService {
  bookList: AngularFireList<any>;
  constructor(private fireDB: AngularFireDatabase) { }

  getBooks() {
    this.bookList = this.fireDB.list('books');
    return this.bookList;
  }
  insertBook(book: Book) {
    this.bookList.push(book);
    console.log(book);
  }
}
