import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ftDatatableCellTemplate]',
})
export class FtDatatableCellTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
