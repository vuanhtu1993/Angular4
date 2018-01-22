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
  todo$: Observable<any>;
  todos = [];
  todo: string;
  editing = false;
  indexToEdit: number;
  todoForm: FormGroup;
  constructor(private store: Store<any>,
              private formBuilder: FormBuilder) {
    this.createTodoForm();
  }

  ngOnInit() {
    this.todo$ = this.store.select('todoReducer');
    console.log(this.todo$);
    this.todo$.subscribe((todo) => {
      this.todos = todo;
    });
  }
  addTodo(value) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {value, done: false}
    });
    this.todo = '';
  }
  deleteTodo(index) {
    this.store.dispatch({
      type: DELETE_TODO,
      payload: {index}
    });
  }
  updateTodo(updatedTodo) {
    this.store.dispatch({
      type: UPDATE_TODO,
      payload: {index: this.indexToEdit, newValue: updatedTodo}
    });
    this.todo = '';
    this.indexToEdit = null;
    this.editing = false;
  }
  editTodo(todo, index) {
    this.editing = true;
    this.todo = todo.value;
    this.indexToEdit = index;
    console.log(this.todo, this.indexToEdit);
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.indexToEdit = null;
  }
  toggleDone(index, todo) {
    this.store.dispatch({
      type: TOGGLE_DONE,
      payload: {index: index, done: todo.done}
    });
  }
  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      todo: '',
    });
  }
}
