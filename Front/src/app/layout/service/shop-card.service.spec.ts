import { TestBed } from '@angular/core/testing';

import { ShopCardService } from './shop-card.service';

describe('ShopCardService', () => {
  let service: ShopCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
