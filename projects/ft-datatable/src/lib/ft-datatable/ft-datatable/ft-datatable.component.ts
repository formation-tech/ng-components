import { ChangeDetectorRef, Component, ContentChild, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { Searchable } from '../../ft-datatable-scrud/interfaces/searchable';

@Component({
  selector: 'ft-datatable',
  templateUrl: './ft-datatable.component.html',
  styleUrls: ['./ft-datatable.component.css'],
  exportAs: 'ftDatatable',
})
export class FtDatatableComponent implements OnInit, OnChanges {
  @Input() service: Searchable<any>;
  @Input() items = [];
  filteredItems = [];

  @ContentChild('filtersTemplate', { read: TemplateRef })
  filtersTemplate: TemplateRef<any>;
  filtersTemplateContext = { items: this.items };

  @ContentChild('tableTemplate', { read: TemplateRef })
  tableTemplate: TemplateRef<any>;
  tableTemplateContext = { filteredItems: this.filteredItems };

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.service) {
      this.service.search().subscribe((items) => {
        this.items = items;
        this.filteredItems = [...this.items];
        this.tableTemplateContext.filteredItems = [...this.items];
      });
    }
  }

  ngOnChanges() {
    this.filteredItems = [...this.items];
    this.filtersTemplateContext.items = [...this.items];
    this.tableTemplateContext.filteredItems = [...this.items];
  }

  updateFilteredItems(filteredItems) {
    this.filteredItems = [...filteredItems];
    this.tableTemplateContext.filteredItems = [...filteredItems];
  }
}
