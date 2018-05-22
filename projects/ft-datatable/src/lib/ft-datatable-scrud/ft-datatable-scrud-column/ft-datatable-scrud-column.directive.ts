import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { FtDatatableCellTemplateDirective } from '../../ft-datatable/ft-datatable-cell-template/ft-datatable-cell-template.directive';
import { FtDatatableColumnDirective } from '../../ft-datatable/ft-datatable-column/ft-datatable-column.directive';
import { FtDatatableCellEditTemplateDirective } from '../ft-datatable-cell-edit-template/ft-datatable-cell-edit-template.directive';

@Directive({
  selector: '[ftDatatableScrudColumn], ft-datatable-scrud-column',
  providers: [
    FtDatatableColumnDirective,
    { provide: FtDatatableColumnDirective, useExisting: FtDatatableScrudColumnDirective },
  ],
})
export class FtDatatableScrudColumnDirective extends FtDatatableColumnDirective {
  @Input() indexEditing = null;

  @ContentChild(FtDatatableCellTemplateDirective, { read: TemplateRef })
  readTemplate: TemplateRef<any>;
  @ContentChild(FtDatatableCellEditTemplateDirective, { read: TemplateRef })
  editTemplate: TemplateRef<any>;

  constructor() {
    super();
  }

  getCellTemplate(index = null) {
    return this.indexEditing === index ? this.editTemplate : this.readTemplate;
  }
}
