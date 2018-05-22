import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scrud } from '../../../../projects/ft-datatable/src/public_api';

@Injectable()
export class CommentService implements Scrud<any> {
  constructor(private httpClient: HttpClient) {}

  search(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }

  create(item: any): Observable<any> {
    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/comments', item);
  }

  update(item: any): Observable<any> {
    return this.httpClient.put<any>('https://jsonplaceholder.typicode.com/comments/' + item.id, item);
  }

  delete(item: any): Observable<any> {
    return this.httpClient.delete<any>('https://jsonplaceholder.typicode.com/comments/' + item.id);
  }
}
