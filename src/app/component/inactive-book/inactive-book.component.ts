import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {CounterService} from "../../counter.service";

@Component({
  selector: 'app-inactive-book',
  templateUrl: './inactive-book.component.html',
  styleUrls: ['./inactive-book.component.css']
})
export class InactiveBookComponent implements OnInit {
  booksInActive;

  constructor(private bookService: BookService,
              private counterService: CounterService) {
    this.getBook();
  }

  getBook() {
    this.booksInActive = this.bookService.getBookInActive();
  }

  ngOnInit() {
    this.bookService.Emitter.subscribe(() => {
      this.getBook();
    });
  }

  setToActive(id) {
    this.bookService.setToActive(id);
    this.bookService.Emitter.emit();
  }
}
