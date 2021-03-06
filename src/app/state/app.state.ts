import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../todo.model';
import { GetAllTodosAction, SetItemAction, AddTodoAction, DeleteTodoAction, EditTodoAction } from './app.actions';
import { TodoService } from '../services/todo.service';

export class AppStateModel {
  todos: Todo[];
  showSpinner: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    todos: [],
    showSpinner: false
  }
})
export class AppState {

  constructor(private todoService: TodoService) { }

  @Selector()
  static all(state: AppStateModel) {
    return state.todos;
  }

  @Selector()
  static pending(state: AppStateModel) {
    return state.todos.filter(todo => todo.completed === false && todo.archived === false);
  }

  @Selector()
  static completed(state: AppStateModel) {
    return state.todos.filter(todo => todo.completed === true && todo.archived === false);
  }

  @Selector()
  static archived(state: AppStateModel) {
    return state.todos.filter(todo => todo.archived === true);
  }

  @Action(GetAllTodosAction)
  getAll({ dispatch }: StateContext<AppStateModel>) {
    this.todoService.getAll().then(todos => {
      dispatch(new SetItemAction({ key: 'todos', value: todos }));
    });
  }

  @Action(SetItemAction)
  setItem({ getState, setState }: StateContext<AppStateModel>, action: SetItemAction) {
    const state = getState();
    setState({
      ...state,
      [action.payload.key]: action.payload.value
    });
  }

  @Action(AddTodoAction)
  addTodo({ dispatch }: StateContext<AppStateModel>, action: AddTodoAction) {
    this.todoService.add(action.payload).then(todo => {
      dispatch(new GetAllTodosAction());
    });
  }

  @Action(DeleteTodoAction)
  deleteTodo({ dispatch }: StateContext<AppStateModel>, action: DeleteTodoAction) {
    this.todoService.delete(action.payload).then(todo => {
      dispatch(new GetAllTodosAction());
    });
  }

  @Action(EditTodoAction)
  editTodo({ dispatch }: StateContext<AppStateModel>, action: EditTodoAction) {
    this.todoService.edit(action.payload).then(todo => {
      dispatch(new GetAllTodosAction());
    });
  }
}
