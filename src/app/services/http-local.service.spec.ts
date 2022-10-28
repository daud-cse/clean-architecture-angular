import { TestBed } from '@angular/core/testing';

import { HttpLocalService } from './http-local.service';

describe('HttpLocalService', () => {
  let service: HttpLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
