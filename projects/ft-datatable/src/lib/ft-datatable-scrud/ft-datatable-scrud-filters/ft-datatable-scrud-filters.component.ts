import { Component, Input, OnInit, } from '@angular/core';
import { FtDatatableFiltersComponent } from '../../ft-datatable/ft-datatable-filters/ft-datatable-filters.component';

@Component({
  selector: 'ft-datatable-scrud-filters',
  templateUrl: './ft-datatable-scrud-filters.component.html',
  styleUrls: ['./ft-datatable-scrud-filters.component.scss'],
})
export class FtDatatableScrudFiltersComponent extends FtDatatableFiltersComponent implements OnInit {
  @Input() service;

  ngOnInit() {
    this.service.search().subscribe((items) => {
      this.items = items;
    });
  }
}
