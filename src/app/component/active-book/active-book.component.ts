import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-active-book',
  templateUrl: './active-book.component.html',
  styleUrls: ['./active-book.component.css']
})
export class ActiveBookComponent implements OnInit {
  booksActive;

  constructor(private bookService: BookService) {
    this.getBook();
  }

  getBook() {
    this.booksActive = this.bookService.getBookActive();
  }

  ngOnInit() {
    this.bookService.Emitter.subscribe(() => {
      this.getBook();
    });
  }

  setToInActive(id) {
    this.bookService.setToInActive(id);
    this.bookService.Emitter.emit();
  }
}
