import { TestBed } from '@angular/core/testing';

import { BackgroundUrlService } from './background-url.service';

describe('BackgroundUrlService', () => {
  let service: BackgroundUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
