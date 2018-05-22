import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDatatableFiltersComponent } from './ft-datatable-filters.component';

describe('FtDatatableFiltersComponent', () => {
  let component: FtDatatableFiltersComponent;
  let fixture: ComponentFixture<FtDatatableFiltersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatableFiltersComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
