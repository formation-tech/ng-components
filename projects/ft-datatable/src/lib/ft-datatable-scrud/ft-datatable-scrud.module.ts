import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FtDatatableModule } from '../ft-datatable/ft-datatable.module';
import { FtDatatableCellEditTemplateDirective } from './ft-datatable-cell-edit-template/ft-datatable-cell-edit-template.directive';
import { FtDatatableScrudColumnDirective } from './ft-datatable-scrud-column/ft-datatable-scrud-column.directive';
import { FtDatatableScrudTableComponent } from './ft-datatable-table-scrud/ft-datatable-scrud-table.component';

@NgModule({
  imports: [CommonModule, FtDatatableModule],
  declarations: [FtDatatableScrudTableComponent, FtDatatableScrudColumnDirective, FtDatatableCellEditTemplateDirective],
  exports: [
    FtDatatableModule,
    FtDatatableScrudTableComponent,
    FtDatatableScrudColumnDirective,
    FtDatatableCellEditTemplateDirective,
  ],
})
export class FtDatatableScrudModule {}
