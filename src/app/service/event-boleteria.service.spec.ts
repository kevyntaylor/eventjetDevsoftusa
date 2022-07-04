import { TestBed } from '@angular/core/testing';

import { EventBoleteriaService } from './event-boleteria.service';

describe('EventBoleteriaService', () => {
  let service: EventBoleteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBoleteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
