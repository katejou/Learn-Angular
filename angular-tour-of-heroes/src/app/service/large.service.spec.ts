import { TestBed } from '@angular/core/testing';

import { LargeService } from './large.service';

describe('LargeService', () => {
  let service: LargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
