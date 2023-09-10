import { TestBed } from '@angular/core/testing';

import { ConexionLocalhostService } from './conexion-localhost.service';

describe('ConexionLocalhostService', () => {
  let service: ConexionLocalhostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionLocalhostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
