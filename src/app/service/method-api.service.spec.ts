import { TestBed } from '@angular/core/testing';

import { MethodApiService } from './method-api.service';

describe('MethodApiService', () => {
  let service: MethodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
