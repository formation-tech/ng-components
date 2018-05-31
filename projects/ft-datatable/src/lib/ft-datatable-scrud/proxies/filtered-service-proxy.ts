import { ReplaySubject } from 'rxjs';


export class FilteredServiceProxy {

  private values = new ReplaySubject(1);

  constructor(private service) {
    const servicePrototype = Object.getPrototypeOf(service);
    const ownPrototype = Object.getPrototypeOf(this);

    const methods = Object.keys(servicePrototype);

    methods.filter((method) => method !== 'search')
      .forEach((method) => {
        ownPrototype[method] = servicePrototype[method];
      });
  }

  search() {
    this.service.search().subscribe(this.values);

    return this.values;
  }

}
