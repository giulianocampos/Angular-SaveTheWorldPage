import { TestBed } from '@angular/core/testing';

import { SolucaoService } from './solucao.service';

describe('SolucaoService', () => {
  let service: SolucaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolucaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
