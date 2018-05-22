import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDatatableScrudTableOnlyComponent } from './basic-datatable-scrud-table-only/basic-datatable-scrud-table-only.component';
import { BasicDatatableTableOnlyComponent } from './basic-datatable-table-only/basic-datatable-table-only.component';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { CustomDatatableScrudTableOnlyComponent } from './custom-datatable-scrud-table-only/custom-datatable-scrud-table-only.component';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';

const routes: Routes = [
  {
    path: 'demos',
    children: [
      {
        path: 'basic-datatable',
        component: BasicDatatableComponent,
      },
      {
        path: 'basic-datatable-table-only',
        component: BasicDatatableTableOnlyComponent,
      },
      {
        path: 'custom-datatable',
        component: CustomDatatableComponent,
      },
      {
        path: 'basic-datatable-scrud-table-only',
        component: BasicDatatableScrudTableOnlyComponent,
      },
      {
        path: 'custom-datatable-scrud-table-only',
        component: CustomDatatableScrudTableOnlyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
