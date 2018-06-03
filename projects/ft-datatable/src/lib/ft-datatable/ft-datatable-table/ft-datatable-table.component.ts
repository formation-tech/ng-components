import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FtDatatableColumnDirective } from '../ft-datatable-column/ft-datatable-column.directive';
import { FtDatatableSubHeaderTemplateDirective } from '../ft-datatable-sub-header-template/ft-datatable-sub-header-template.directive';

@Component({
  selector: 'ft-datatable-table',
  templateUrl: './ft-datatable-table.component.html',
  styleUrls: ['./ft-datatable-table.component.scss'],
})
export class FtDatatableTableComponent implements AfterContentChecked, OnChanges {
  @Input()
  get keys() {
    return Object.keys(this.columns);
  }
  @Input()
  columns: {
    [key: string]: {
      title?: string;
      getCellTemplate?: (index) => TemplateRef<any>;
      getHeaderCellTemplate?: () => TemplateRef<any>;
      [key: string]: any;
    };
  } = {};

  @Input() items = [];

  /* Column sort */
  @Input() sortKey = '';
  @Input() sortAsc = true;

  /* Pagination */
  @Input() page = 1;
  @Input() pageSize = 50;
  paginatedItems = [];

  @ContentChildren(FtDatatableColumnDirective) columnDirectiveQueryList: QueryList<FtDatatableColumnDirective>;
  @ContentChild(FtDatatableSubHeaderTemplateDirective, {read: TemplateRef}) subHeaderTemplate: TemplateRef<any>;

  constructor(protected cd: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    // We get the keys, titles and templates from the directive
    if (this.columnDirectiveQueryList.length) {
      this.columns = {};

      this.columnDirectiveQueryList.forEach((cd) => {
        this.columns[cd.key] = this.columns[cd.key] || {};

        if (cd.title) {
          this.columns[cd.key].title = cd.title;
        }

        this.columns[cd.key].sortable = cd.sortable;

        this.columns[cd.key].getCellTemplate = (index) => cd.getCellTemplate(index);
        this.columns[cd.key].getHeaderCellTemplate = () => cd.getHeaderCellTemplate();
      });

      // Default sort (first col)
      if (!this.sortKey) {
        this.sortKey = this.keys[0];
      }

      return;
    }

    // Fallback if no key specified
    if (this.items && this.items.length && !this.columnDirectiveQueryList.length && !this.keys.length) {
      const keys = Object.keys(this.items[0]);
      keys.forEach((key) => {
        this.columns[key] = {
          sortable: true,
        };
      });

      // Default sort (first col)
      if (!this.sortKey) {
        this.sortKey = this.keys[0];
      }


      return;
    }
  }

  ngOnChanges() {
    this.sortAsc = !this.sortAsc;
    this.order(this.sortKey);
  }

  setPage(page) {
    this.paginatedItems = this.items.slice((page - 1) * this.pageSize, page * this.pageSize);
    if (page !== this.page) {
      this.page = page;
      this.cd.detectChanges();
    }
  }

  order(key) {
    if (this.columns[key] && !this.columns[key].sortable) {
      return;
    }

    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
    this.items = this.items.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }

      if (a[key] > b[key]) {
        return 1;
      }

      return 0;
    }).slice();

    if (!this.sortAsc) {
      this.items.reverse();
    }
    this.setPage(this.page);
  }

  refresh() {
    this.sortAsc = !this.sortAsc;
    this.order(this.sortKey);
  }
}
