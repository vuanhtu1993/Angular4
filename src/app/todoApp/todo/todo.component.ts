import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Todo} from '../model/todo';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as todoAction from '../store/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
  todoForm: FormGroup;
  constructor(private store: Store<any>,
              private formBuilder: FormBuilder) {
    this.store.pipe(select('todo'))
      .subscribe((todos: Todo) => {
        this.todos = todos;
        console.log(todos);
      });
  }

  ngOnInit() {
    this.creatTodoForm();
  }

  creatTodoForm() {
    this.todoForm = this.formBuilder.group({
      name: ['', []],
      description: ['', []],
      isDone: [false, [], []],
    });
  }

  addTodo() {
    this.store.dispatch(new todoAction.AddTodo(this.todoForm.value));
  }
}
