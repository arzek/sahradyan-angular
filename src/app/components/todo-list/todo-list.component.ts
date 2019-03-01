import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tbody[app-todo-list]',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() items: Todo[] = [];
}
