import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDatatableScrudComponent } from './ft-datatable-scrud.component';

describe('FtDatatableScrudComponent', () => {
  let component: FtDatatableScrudComponent;
  let fixture: ComponentFixture<FtDatatableScrudComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatableScrudComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatableScrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
