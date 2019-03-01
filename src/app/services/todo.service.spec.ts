import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { TodoService } from './todo.service';

import * as faker from 'faker';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../state/app.state';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([
          AppState
        ])
      ],
      providers: [
        TodoService
      ]
    });

    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all todos', () => {
    const todosMoc = [
      {
        'id': faker.random.number(),
        'title': faker.name.firstName(),
        'completed': faker.random.boolean(),
        'archived': faker.random.boolean()
      }
    ];

    service.getAll().then(todos => {
      expect(todos.length).toBe(1);
      expect(todos[0].id).toBe(todosMoc[0].id);
      expect(todos[0].title).toBe(todosMoc[0].title);
      expect(todos[0].completed).toBe(todosMoc[0].completed);
      expect(todos[0].archived).toBe(todosMoc[0].archived);
    });

    const request = httpMock.expectOne(`${environment.api}/todos`);
    request.flush(todosMoc);
    httpMock.verify();
  });

  it('add todo', () => {
    const todoMoc = {
      'id': faker.random.number(),
      'title': faker.name.firstName(),
      'completed': faker.random.boolean(),
      'archived': faker.random.boolean()
    };

    service.add(todoMoc).then(todo => {
      expect(todoMoc.id).toBe(todo.id);
      expect(todoMoc.title).toBe(todo.title);
      expect(todoMoc.completed).toBe(todo.completed);
      expect(todoMoc.archived).toBe(todo.archived);
    });

    const request = httpMock.expectOne(`${environment.api}/todos`);
    request.flush(todoMoc);
    httpMock.verify();
  });

  it('edit todo', () => {
    const todoMoc = {
      'id': faker.random.number(),
      'title': faker.name.firstName(),
      'completed': faker.random.boolean(),
      'archived': faker.random.boolean()
    };

    service.edit(todoMoc).then(todo => {
      expect(todoMoc.id).toBe(todo.id);
      expect(todoMoc.title).toBe(todo.title);
      expect(todoMoc.completed).toBe(todo.completed);
      expect(todoMoc.archived).toBe(todo.archived);
    });

    const request = httpMock.expectOne(`${environment.api}/todos/${todoMoc.id}`);
    request.flush(todoMoc);
    httpMock.verify();
  });

  it('delete todo', () => {
    const todoMoc = {
      'id': faker.random.number(),
      'title': faker.name.firstName(),
      'completed': faker.random.boolean(),
      'archived': faker.random.boolean()
    };

    service.delete(todoMoc).then(res => {
      expect(res).toEqual({});
    });

    const request = httpMock.expectOne(`${environment.api}/todos/${todoMoc.id}`);
    request.flush({});
    httpMock.verify();
  });

});
