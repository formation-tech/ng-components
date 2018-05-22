import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FtDatatableModule } from './ft-datatable/ft-datatable.module';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FtDatatableModule, HttpClientModule],
        declarations: [AppComponent],
      }).compileComponents();
    }),
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );
});
