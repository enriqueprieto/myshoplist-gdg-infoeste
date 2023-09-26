import { TestBed } from '@angular/core/testing';

import { UuidGeneratorService } from '.';

describe('UuidGeneratorService', () => {
  let service: UuidGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UuidGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
