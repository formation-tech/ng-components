import { Observable } from 'rxjs';

export interface Searchable<T> {
  search(): Observable<T[]>;
}
