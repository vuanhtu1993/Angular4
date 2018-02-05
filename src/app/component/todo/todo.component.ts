import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ADD_TODO, DELETE_TODO, TOGGLE_DONE, UPDATE_TODO} from '../../reducer/todo.reducer';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [];
  todo;
  todoForm: FormGroup;
  constructor(private store: Store<any>,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.store.subscribe((value) => {
      this.todos = value;
      console.log(this.todos);
    });
  }
  createForm() {
    this.todoForm = this.formBuilder.group({
      todo: [this.todo],
    });
  }
  insertTodo(value) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        value,
        done: false,
      }
    });
    this.todoForm.reset();
  }
}
