import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ftDatatableSubHeaderTemplate]',
})
export class FtDatatableSubHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
