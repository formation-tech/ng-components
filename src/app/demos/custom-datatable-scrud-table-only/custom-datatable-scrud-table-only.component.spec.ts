import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatatableScrudTableOnlyComponent } from './custom-datatable-scrud-table-only.component';

describe('CustomDatatableScrudTableOnlyComponent', () => {
  let component: CustomDatatableScrudTableOnlyComponent;
  let fixture: ComponentFixture<CustomDatatableScrudTableOnlyComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CustomDatatableScrudTableOnlyComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatatableScrudTableOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
