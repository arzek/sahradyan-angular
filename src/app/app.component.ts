import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetAllTodosAction } from './state/app.actions';
import { AppState } from './state/app.state';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @Select(AppState.all) all$: Observable<Todo[]>;
  @Select(AppState.pending) pending$: Observable<Todo[]>;
  @Select(AppState.completed) completed$: Observable<Todo[]>;
  @Select(AppState.archived) archived$: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllTodosAction());
  }

}
