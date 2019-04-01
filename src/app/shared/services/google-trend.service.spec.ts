import { TestBed } from '@angular/core/testing';

import { GoogleTrendService } from './google-trend.service';

describe('GoogleTrendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleTrendService = TestBed.get(GoogleTrendService);
    expect(service).toBeTruthy();
  });
});
