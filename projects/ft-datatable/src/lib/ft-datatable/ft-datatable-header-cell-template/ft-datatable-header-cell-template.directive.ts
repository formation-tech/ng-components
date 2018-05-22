import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ftDatatableHeaderCellTemplate]',
})
export class FtDatatableHeaderCellTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
