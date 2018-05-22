import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ftDatatableCellEditTemplate]',
})
export class FtDatatableCellEditTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
