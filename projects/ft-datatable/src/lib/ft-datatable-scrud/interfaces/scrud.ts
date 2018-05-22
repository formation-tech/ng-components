import { Creatable } from './creatable';
import { Deletable } from './deletable';
import { Searchable } from './searchable';
import { Updatable } from './updatable';

export interface Scrud<T> extends Searchable<T>, Creatable<T>, Updatable<T>, Deletable<T> {}
