import { TestBed } from '@angular/core/testing';

import { CadastroUnidadeService } from './cadastro-unidade.service';

describe('CadastroUnidadeService', () => {
  let service: CadastroUnidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUnidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
