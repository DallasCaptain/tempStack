import { TestBed } from '@angular/core/testing';

import { PupsService } from './pups.service';

describe('PupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PupsService = TestBed.get(PupsService);
    expect(service).toBeTruthy();
  });
});
