import {Action} from '@ngrx/store';
import {Todo} from '../model/todo';

export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class AddTodo implements Action {
  type = ADD_TODO;
  constructor(public payload: Todo) {
  }
}
export class DoneTodo implements Action {
  type = DONE_TODO;
}
export class DeleteTodo implements Action {
  type = DELETE_TODO;
}

export type todoAction = AddTodo | DoneTodo | DeleteTodo;
