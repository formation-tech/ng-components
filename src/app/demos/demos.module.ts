import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FtDatatableScrudModule } from '../../../projects/ft-datatable/src/public_api';
import { FtDatatableModule } from '../../../projects/ft-datatable/src/public_api';
import { BasicDatatableScrudTableOnlyComponent } from './basic-datatable-scrud-table-only/basic-datatable-scrud-table-only.component';
import { BasicDatatableTableOnlyComponent } from './basic-datatable-table-only/basic-datatable-table-only.component';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { CustomDatatableScrudTableOnlyComponent } from './custom-datatable-scrud-table-only/custom-datatable-scrud-table-only.component';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';
import { DemosRoutingModule } from './demos-routing.module';
import { CommentService } from './services/comment.service';
import { CrunchbaseService } from './services/crunchbase.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [CommonModule, DemosRoutingModule, HttpClientModule, FtDatatableModule, FtDatatableScrudModule],
  declarations: [
    BasicDatatableComponent,
    CustomDatatableComponent,
    CustomDatatableScrudTableOnlyComponent,
    BasicDatatableScrudTableOnlyComponent,
    BasicDatatableTableOnlyComponent,
  ],
  providers: [CommentService, CrunchbaseService, UserService],
})
export class DemosModule {}
