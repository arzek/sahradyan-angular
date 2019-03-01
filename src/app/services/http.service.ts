import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngxs/store';
import { SetItemAction } from '../state/app.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private store: Store) { }

  get(url: string): Promise<any> {
    return this.send(this.http.get(environment.api + url).toPromise());
  }

  post(url: string, data: object): Promise<any> {
    return this.send(this.http.post(environment.api + url, data).toPromise());
  }

  put(url: string, data: object): Promise<any> {
    return this.send(this.http.put(environment.api + url, data).toPromise());
  }

  delete(url: string): Promise<any> {
    return this.send(this.http.delete(environment.api + url).toPromise());
  }

  private send(request: Promise<any>) {
    return new Promise(async (resolve, reject) => {
      try {
        this.store.dispatch(new SetItemAction({ key: 'showSpinner', value: true }));
        const res = await request;
        resolve(res);
        this.store.dispatch(new SetItemAction({ key: 'showSpinner', value: false }));
      } catch (e) {
        reject(e);
        this.store.dispatch(new SetItemAction({ key: 'showSpinner', value: false }));
      }
    });
  }
}
