import { KeyValue } from '@angular/common';
import { Todo } from '../todo.model';

export class GetAllTodosAction {
  static readonly type = '[App] Get all todos';
}

export class SetItemAction {
  static readonly type = '[App] Set item';
  constructor(public payload: KeyValue<string, any>) { }
}

export class AddTodoAction {
  static readonly type = '[App] Add todo';
  constructor(public payload: Todo) { }
}

export class DeleteTodoAction {
  static readonly type = '[App] Delete todo';
  constructor(public payload: Todo) { }
}
