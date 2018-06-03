import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FtDatatableModule } from '../ft-datatable/ft-datatable.module';
import { FtDatatableCellEditTemplateDirective } from './ft-datatable-cell-edit-template/ft-datatable-cell-edit-template.directive';
import { FtDatatableScrudColumnDirective } from './ft-datatable-scrud-column/ft-datatable-scrud-column.directive';
import { FtDatatableScrudTableComponent } from './ft-datatable-table-scrud/ft-datatable-scrud-table.component';
import { FtDatatableScrudComponent } from './ft-datatable-scrud/ft-datatable-scrud.component';
import { FtDatatableScrudFiltersComponent } from './ft-datatable-scrud-filters/ft-datatable-scrud-filters.component';

@NgModule({
  imports: [CommonModule, FormsModule, FtDatatableModule],
  declarations: [
    FtDatatableScrudTableComponent,
    FtDatatableScrudComponent,
    FtDatatableScrudFiltersComponent,
    FtDatatableScrudColumnDirective,
    FtDatatableCellEditTemplateDirective],
  exports: [
    FtDatatableModule,
    FtDatatableScrudTableComponent,
    FtDatatableScrudComponent,
    FtDatatableScrudFiltersComponent,
    FtDatatableScrudColumnDirective,
    FtDatatableCellEditTemplateDirective,
  ],
})
export class FtDatatableScrudModule {}
