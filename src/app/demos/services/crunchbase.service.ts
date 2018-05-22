import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Scrud } from '../../../../projects/ft-datatable/src/public_api';

@Injectable()
export class CrunchbaseService implements Scrud<any> {
  constructor(private httpClient: HttpClient) {}

  search(): Observable<any[]> {
    return this.httpClient
      .get('/assets/crunchbase-extract.json')
      .pipe(map((items: any[]) => items.map(({ name, homepage_url }) => ({ name, homepage_url }))));
  }

  create(item: any): Observable<any> {
    return this.httpClient.post('/assets/crunchbase-extract.json', item);
  }

  update(item: any): Observable<any> {
    return undefined;
  }

  delete(item: any): Observable<any> {
    return undefined;
  }
}
