import { Component, Input, OnInit, } from '@angular/core';
import { FtDatatableTableComponent } from '../../ft-datatable/ft-datatable-table/ft-datatable-table.component';
import { Searchable } from '../interfaces/searchable';
import { FilteredServiceProxy } from '../proxies/filtered-service-proxy';

@Component({
  selector: 'ft-datatable-scrud',
  templateUrl: './ft-datatable-scrud.component.html',
  styleUrls: ['./ft-datatable-scrud.component.scss'],
  exportAs: 'ftDatatableScrudTable',
  preserveWhitespaces: true,
})
export class FtDatatableScrudComponent extends FtDatatableTableComponent implements OnInit {
  @Input() service: Searchable<any> | any;
  @Input() filteredService;

  ngOnInit() {
    this.filteredService = new FilteredServiceProxy(this.service);
  }
}
