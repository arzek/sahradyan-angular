import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly path = '/todos';

  constructor(private http: HttpService) { }

  getAll(): Promise<Todo[]> {
    return this.http.get(this.path);
  }

  add(todo: Todo): Promise<Todo> {
    return this.http.post(this.path, todo);
  }

  edit(todo: Todo): Promise<Todo> {
    return this.http.put(`${this.path}/${todo.id}`, todo);
  }

  delete(todo: Todo): Promise<Todo> {
    return this.http.delete(`${this.path}/${todo.id}`);
  }
}
