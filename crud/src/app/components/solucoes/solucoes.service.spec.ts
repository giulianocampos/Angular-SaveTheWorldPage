import { TestBed } from '@angular/core/testing';

import { SolucaoService } from './serv.service';

describe('SolucoesService', () => {
  let service: SolucaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolucaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
