import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookForm: FormControl;
  booksSearched = [];
  arrayBook = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.bookForm = new FormControl();
    this.bookForm
      .valueChanges
      .debounceTime(200)
      .subscribe((value) => {

        const b = this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + value)
          .map((book: any) => {
            return book.items;
          })
          .subscribe((arrayBook) => {
            this.booksSearched = arrayBook;
          });
      });
  }
}

export interface Book {
  title: string;
  authors: string;
  publisher: string;
  description: string;
  publishedDate: string;
  pageCount: string;
  imageLinks: string;
}
