import { TestBed } from '@angular/core/testing';

import { IconFilterService } from './icon-service.service';

describe('IconFilterService', () => {
  let service: IconFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
