import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Scrud } from '../../../../projects/ft-datatable/src/public_api';

@Injectable()
export class UserService implements Scrud<any> {
  constructor(private httpClient: HttpClient) {}

  search(): Observable<any[]> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((items: any[]) => items.map(({ id, name, username, email }) => ({ id, name, username, email }))));
  }

  create(item: any): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', item);
  }

  update(item: any): Observable<any> {
    return this.httpClient.put('https://jsonplaceholder.typicode.com/users/' + item.id, item);
  }

  delete(item: any): Observable<any> {
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/users/' + item.id);
  }
}
