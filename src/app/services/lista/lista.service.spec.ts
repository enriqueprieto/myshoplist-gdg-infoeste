import { TestBed } from '@angular/core/testing';

import { ListaService } from '.';

describe('IndexService', () => {
  let service: ListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
