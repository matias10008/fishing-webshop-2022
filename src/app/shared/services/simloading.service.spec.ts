import { TestBed } from '@angular/core/testing';

import { SimloadingService } from './simloading.service';

describe('SimloadingService', () => {
  let service: SimloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
