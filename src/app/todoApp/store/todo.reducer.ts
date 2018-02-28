import {Todo} from '../model/todo';
import * as todoAction from './todo.action';
import {ADD_TODO, AddTodo} from './todo.action';
export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [
    {name: 'Learn Angular Testing', description: 'What is the Angular test ultilities', isDone: false}
  ],
};

export function TodoReducer(state = initialState, action: todoAction.AddTodo) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
  }
  return state;
}
