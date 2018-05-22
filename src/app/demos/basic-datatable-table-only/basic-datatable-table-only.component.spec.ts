import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatatableTableOnlyComponent } from './basic-datatable-table-only.component';

describe('BasicDatatableTableOnlyComponent', () => {
  let component: BasicDatatableTableOnlyComponent;
  let fixture: ComponentFixture<BasicDatatableTableOnlyComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BasicDatatableTableOnlyComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatatableTableOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
