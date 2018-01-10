import {EventEmitter, Injectable} from '@angular/core';
import {bookList} from './book';
import {CounterService} from './counter.service';
import {LoggingService} from './logging.service';

@Injectable()
export class BookService {
  booksActive;
  booksInActive;
  constructor(private counterService: CounterService,
              private loggingService: LoggingService) {
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
    this.counterService.countActionActive();
    this.loggingService.logStatus('set to active');
  }
  setToInActive(id) {
    bookList.find((book) => (book.id === id)).active = false;
    this.updateStatus();
    this.counterService.countActionInActive();
    this.loggingService.logStatus('set to inactive');
  }
}
