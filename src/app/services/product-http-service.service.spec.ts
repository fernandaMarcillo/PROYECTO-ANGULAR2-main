import { TestBed } from '@angular/core/testing';

import { ProductHttpServiceService } from './product-http-service.service';

describe('ProductHttpServiceService', () => {
  let service: ProductHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
