import { inject, TestBed } from '@angular/core/testing';

import { CrunchbaseService } from './crunchbase.service';

describe('CrunchbaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrunchbaseService],
    });
  });

  it(
    'should be created',
    inject([CrunchbaseService], (service: CrunchbaseService) => {
      expect(service).toBeTruthy();
    }),
  );
});
