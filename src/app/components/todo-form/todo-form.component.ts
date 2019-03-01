import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodoAction } from 'src/app/state/app.actions';
import { Todo } from 'src/app/todo.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'caption[app-todo-form]',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {

  newTodo = '';

  constructor(private store: Store) { }

  handleAdd(event: Event) {
    event.preventDefault();
    this.store.dispatch(new AddTodoAction(new Todo(this.newTodo)));
    this.newTodo = '';
  }
}
