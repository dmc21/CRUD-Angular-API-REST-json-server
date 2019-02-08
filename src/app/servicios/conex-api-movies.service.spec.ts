import { TestBed } from '@angular/core/testing';

import { ConexApiMoviesService } from './conex-api-movies.service';

describe('ConexApiMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexApiMoviesService = TestBed.get(ConexApiMoviesService);
    expect(service).toBeTruthy();
  });
});
