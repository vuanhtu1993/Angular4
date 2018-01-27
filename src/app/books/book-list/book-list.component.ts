import {Component, OnInit} from '@angular/core';
import {BookService} from '../book-service/book.service';
import {Book} from '../book-service/book';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.bookService.getBooks().snapshotChanges()
      .subscribe((books: any) => {
        this.books = [];
        books.forEach((element) => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.books.push(x as Book);
        });
      });
  }
  onSelected(book) {
    this.bookService.bookSelected = book;
  }
}
