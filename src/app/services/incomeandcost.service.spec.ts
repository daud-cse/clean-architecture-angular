import { TestBed } from '@angular/core/testing';

import { IncomeandcostService } from './incomeandcost.service';

describe('IncomeandcostService', () => {
  let service: IncomeandcostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeandcostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
