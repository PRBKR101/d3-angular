import { TestBed } from '@angular/core/testing';

import { StockTickerService } from './stock-ticker.service';

describe('StockTickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockTickerService = TestBed.get(StockTickerService);
    expect(service).toBeTruthy();
  });
});
