import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo.model';
import { Store } from '@ngxs/store';
import { DeleteTodoAction } from 'src/app/state/app.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-todo-item]',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {

  @Input() item: Todo = new Todo();

  constructor(private store: Store) { }

  delete() {
    this.store.dispatch(new DeleteTodoAction(this.item));
  }

  get icon(): string {
    return this.item.archived ? 'icon: pull' : 'icon: push';
  }
}
