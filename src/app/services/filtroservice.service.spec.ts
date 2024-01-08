import { TestBed } from '@angular/core/testing';

import { FiltroserviceService } from './filtro.service';

describe('FiltroserviceService', () => {
  let service: FiltroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
