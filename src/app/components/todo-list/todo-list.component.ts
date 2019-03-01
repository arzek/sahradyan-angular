import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tbody[app-todo-list]',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
