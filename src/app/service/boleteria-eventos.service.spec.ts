import { TestBed } from '@angular/core/testing';

import { BoleteriaEventosService } from './boleteria-eventos.service';

describe('BoleteriaEventosService', () => {
  let service: BoleteriaEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoleteriaEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
