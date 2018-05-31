import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDatatableScrudFiltersComponent } from './ft-datatable-scrud-filters.component';

describe('FtDatatableScrudFiltersComponent', () => {
  let component: FtDatatableScrudFiltersComponent;
  let fixture: ComponentFixture<FtDatatableScrudFiltersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatableScrudFiltersComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableScrudFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
