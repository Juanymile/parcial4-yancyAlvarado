import { TestBed } from '@angular/core/testing';

import { DetalleSalarioService } from './detalle-salario.service';

describe('DetalleSalarioService', () => {
  let service: DetalleSalarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleSalarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
