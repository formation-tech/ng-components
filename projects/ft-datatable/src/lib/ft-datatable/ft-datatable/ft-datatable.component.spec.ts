import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FtDatatableFiltersComponent } from '../ft-datatable-filters/ft-datatable-filters.component';
import { FtDatatablePaginationComponent } from '../ft-datatable-pagination/ft-datatable-pagination.component';
import { FtDatatableTableComponent } from '../ft-datatable-table/ft-datatable-table.component';

import { FtDatatableComponent } from './ft-datatable.component';

describe('FtDatatableComponent', () => {
  let component: FtDatatableComponent;
  let fixture: ComponentFixture<FtDatatableComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          FtDatatableComponent,
          FtDatatableTableComponent,
          FtDatatablePaginationComponent,
          FtDatatableFiltersComponent,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
