import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDatatablePaginationComponent } from './ft-datatable-pagination.component';

describe('FtDatatablePaginationComponent', () => {
  let component: FtDatatablePaginationComponent;
  let fixture: ComponentFixture<FtDatatablePaginationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FtDatatablePaginationComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDatatablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill pages array', () => {
    component.count = 100;
    component.pageSize = 20;

    fixture.detectChanges();
    component.ngOnChanges();

    expect(component.pages[0]).toBe(1);
    expect(component.pages[4]).toBe(5);
    expect(component.pages.length).toBe(5);

    component.count = 105;
    component.pageSize = 20;

    fixture.detectChanges();
    component.ngOnChanges();

    expect(component.pages[0]).toBe(1);
    expect(component.pages[4]).toBe(5);
    expect(component.pages.length).toBe(6);
  });

  it('should fill filteredPages array', () => {
    component.count = 500;
    component.page = 1;
    component.maxPages = 5;
    component.pageSize = 20;

    fixture.detectChanges();
    component.ngOnChanges();
    component.setPage(1);

    expect(component.filteredPages[0]).toBe(1);
    expect(component.filteredPages[4]).toBe(5);
    expect(component.filteredPages.length).toBe(5);

    component.setPage(3);

    expect(component.filteredPages[0]).toBe(1);
    expect(component.filteredPages[4]).toBe(5);
    expect(component.filteredPages.length).toBe(5);

    component.setPage(8);

    expect(component.filteredPages[0]).toBe(6);
    expect(component.filteredPages[4]).toBe(10);
    expect(component.filteredPages.length).toBe(5);
  });
});
