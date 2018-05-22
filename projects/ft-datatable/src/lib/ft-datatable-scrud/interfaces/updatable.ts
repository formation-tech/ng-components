import { Observable } from 'rxjs';

export interface Updatable<T> {
  update(id): Observable<T>;
}
