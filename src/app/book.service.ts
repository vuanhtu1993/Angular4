import {EventEmitter, Injectable} from '@angular/core';
import {bookList} from './book';

@Injectable()
export class BookService {
  booksActive;
  booksInActive;
  constructor() {
    this.updateStatus();
  }
  Emitter = new EventEmitter();
  updateStatus() {
    this.booksActive = bookList.filter((book) => (book.active));
    this.booksInActive = bookList.filter((book) => (!book.active));
  }
  getBookActive() {
    return this.booksActive;
  }
  getBookInActive() {
    return this.booksInActive;
  }
  setToActive(id) {
    // console.log(bookList.find((book) => (book.id === id)));
    bookList.find((book) => (book.id === id)).active = true;
    this.updateStatus();
  }
  setToInActive(id) {
    bookList.find((book) => (book.id === id)).active = false;
    this.updateStatus();
  }
}
