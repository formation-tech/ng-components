import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FtDatatableColumnDirective } from '../ft-datatable-column/ft-datatable-column.directive';
import { FtDatatablePaginationComponent } from '../ft-datatable-pagination/ft-datatable-pagination.component';

import { FtDatatableTableComponent } from './ft-datatable-table.component';

describe('FtDatatableTableComponent', () => {
  let component: FtDatatableTableComponent;
  let fixture: ComponentFixture<FtDatatableTableComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatableTableComponent, FtDatatableColumnDirective, FtDatatablePaginationComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableTableComponent);
    component = fixture.componentInstance;
    component.items = [
      {
        firstName: 'Steve',
        lastName: 'Jobs',
      },
      {
        firstName: 'Bill',
        lastName: 'Gates',
      },
      {
        firstName: 'Mark',
        lastName: 'Zuckerberg',
      },
      {
        firstName: 'Elon',
        lastName: 'Musk',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by sortKey ASC', () => {
    component.sortKey = 'firstName';
    fixture.detectChanges();
    component.ngOnChanges();
    expect(component.paginatedItems[0].firstName).toBe('Bill');
    expect(component.paginatedItems[0].lastName).toBe('Gates');
  });

  it('should sort by sortKey DESC', () => {
    component.sortKey = 'firstName';
    component.sortAsc = false;
    fixture.detectChanges();
    component.ngOnChanges();
    expect(component.paginatedItems[0].firstName).toBe('Steve');
    expect(component.paginatedItems[0].lastName).toBe('Jobs');
  });
});
