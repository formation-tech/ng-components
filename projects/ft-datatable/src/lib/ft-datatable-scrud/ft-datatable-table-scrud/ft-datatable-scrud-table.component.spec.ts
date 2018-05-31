import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDatatableScrudTableComponent } from './ft-datatable-scrud-table.component';

describe('FtDatatableScrudComponent', () => {
  let component: FtDatatableScrudTableComponent;
  let fixture: ComponentFixture<FtDatatableScrudTableComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatableScrudTableComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableScrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
