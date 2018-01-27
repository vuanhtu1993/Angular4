import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Book} from './book-service/book';
import {BookService} from './book-service/book.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookForm: FormControl;
  booksSearched = [];
  addedBook: Book;

  constructor(private http: HttpClient,
              private bookService: BookService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.bookForm = new FormControl();
    this.bookForm
      .valueChanges
      .debounceTime(200)
      .subscribe((value) => {

        this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + value)
          .map((book: any) => {
            return book.items;
          })
          .subscribe((arrayBook) => {
            this.booksSearched = arrayBook;
          });
      });
  }

  onInsertBook(book) {
    this.addedBook = new Book;
    this.addedBook.title = book.title;
    this.addedBook.authors = book.authors;
    this.addedBook.description = book.description;
    this.addedBook.pageCount = book.pageCount;
    this.addedBook.imageLinks = book.imageLinks;
    this.bookService.insertBook(this.addedBook);
    this.toastr.success('Adding successfully', 'Book added');
  }
}

