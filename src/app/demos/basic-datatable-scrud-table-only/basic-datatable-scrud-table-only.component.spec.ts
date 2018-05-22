import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatatableScrudTableOnlyComponent } from './basic-datatable-scrud-table-only.component';

describe('BasicDatatableScrudTableOnlyComponent', () => {
  let component: BasicDatatableScrudTableOnlyComponent;
  let fixture: ComponentFixture<BasicDatatableScrudTableOnlyComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BasicDatatableScrudTableOnlyComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatatableScrudTableOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
