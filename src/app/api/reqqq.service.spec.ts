import { TestBed } from '@angular/core/testing';

import { ReqqqService } from './reqqq.service';

describe('ReqqqService', () => {
  let service: ReqqqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqqqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
