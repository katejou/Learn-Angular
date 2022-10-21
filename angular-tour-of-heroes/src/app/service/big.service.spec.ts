import { TestBed } from '@angular/core/testing';

import { BigService } from './big.service';

describe('BigService', () => {
  let service: BigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
