import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FtDatatableCellTemplateDirective } from './ft-datatable-cell-template/ft-datatable-cell-template.directive';
import { FtDatatableColumnDirective } from './ft-datatable-column/ft-datatable-column.directive';
import { FtDatatableFiltersComponent } from './ft-datatable-filters/ft-datatable-filters.component';
import { FtDatatableHeaderCellTemplateDirective } from './ft-datatable-header-cell-template/ft-datatable-header-cell-template.directive';
import { FtDatatablePaginationComponent } from './ft-datatable-pagination/ft-datatable-pagination.component';
import { FtDatatableSubHeaderTemplateDirective } from './ft-datatable-sub-header-template/ft-datatable-sub-header-template.directive';
import { FtDatatableTableComponent } from './ft-datatable-table/ft-datatable-table.component';
import { FtDatatableComponent } from './ft-datatable/ft-datatable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FtDatatableColumnDirective,
    FtDatatableComponent,
    FtDatatableFiltersComponent,
    FtDatatablePaginationComponent,
    FtDatatableTableComponent,
    FtDatatableCellTemplateDirective,
    FtDatatableHeaderCellTemplateDirective,
    FtDatatableSubHeaderTemplateDirective,
  ],
  exports: [
    FtDatatableColumnDirective,
    FtDatatableComponent,
    FtDatatableFiltersComponent,
    FtDatatablePaginationComponent,
    FtDatatableTableComponent,
    FtDatatableCellTemplateDirective,
    FtDatatableHeaderCellTemplateDirective,
    FtDatatableSubHeaderTemplateDirective,
  ],
})
export class FtDatatableModule {}
