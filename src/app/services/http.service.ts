import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Promise<any> {
    return this.http.get(environment.api + url).toPromise();
  }

  post(url: string, data: object): Promise<any> {
    return this.http.post(environment.api + url, data).toPromise();
  }

  put(url: string, data: object): Promise<any> {
    return this.http.put(environment.api + url, data).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete(environment.api + url).toPromise();
  }
}
