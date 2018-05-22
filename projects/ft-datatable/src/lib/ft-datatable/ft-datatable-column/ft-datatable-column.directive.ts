import { ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { FtDatatableCellTemplateDirective } from '../ft-datatable-cell-template/ft-datatable-cell-template.directive';
import { FtDatatableHeaderCellTemplateDirective } from '../ft-datatable-header-cell-template/ft-datatable-header-cell-template.directive';

@Directive({
  selector: '[ftDatatableColumn], ft-datatable-column',
})
export class FtDatatableColumnDirective implements OnInit {
  @Input() key;
  @Input() title;
  @Input() sortable = true;
  @ContentChild(FtDatatableCellTemplateDirective, { read: TemplateRef })
  cellTemplate: TemplateRef<any>;
  @ContentChild(FtDatatableHeaderCellTemplateDirective, { read: TemplateRef })
  headerCellTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  getCellTemplate(item = null) {
    return this.cellTemplate;
  }

  getHeaderCellTemplate() {
    return this.headerCellTemplate;
  }
}
