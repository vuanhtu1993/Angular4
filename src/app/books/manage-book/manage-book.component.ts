import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book-service/book.service';
import {Book} from '../book-service/book';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {
  editForm: FormGroup;
  editedBook:  Book;
  constructor(private bookService: BookService,
              private formBuilder: FormBuilder) {
    this.createEditForm();
  }

  ngOnInit() {
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      title: [this.bookService.bookSelected.title, [Validators.required]],
      description: [this.bookService.bookSelected.description, [Validators.required]],
      pageCount: [this.bookService.bookSelected.pageCount, [Validators.required]],
      $key: [this.bookService.bookSelected.$key, [Validators.required]],
      authors: [this.bookService.bookSelected.authors, [Validators.required]],
      imageLinks: [this.bookService.bookSelected.imageLinks, [Validators.required]],
    });
  }
  onUpdate(bookEdit: Book) {
    this.bookService.updateBook(bookEdit);
  }
  onDelete($key) {
    this.bookService.deleteBook($key);
    this.editForm.reset();
  }
}
