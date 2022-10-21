import { TestBed } from '@angular/core/testing';

import { SmallService } from './small.service';

describe('SmallService', () => {
  let service: SmallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
