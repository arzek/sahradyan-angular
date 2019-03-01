import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, NgxsModule } from '@ngxs/store';

import { HttpService } from './http.service';
import { AppState } from '../state/app.state';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, NgxsModule.forRoot([
      AppState
    ])]
  }));
  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
