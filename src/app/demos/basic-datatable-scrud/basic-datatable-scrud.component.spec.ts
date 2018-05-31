import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatatableScrudComponent } from './basic-datatable-scrud.component';

describe('BasicDatatableScrudComponent', () => {
  let component: BasicDatatableScrudComponent;
  let fixture: ComponentFixture<BasicDatatableScrudComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BasicDatatableScrudComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatatableScrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
