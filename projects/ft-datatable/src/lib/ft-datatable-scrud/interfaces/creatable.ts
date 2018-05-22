import { Observable } from 'rxjs';

export interface Creatable<T> {
  create(data: T): Observable<T>;
}
