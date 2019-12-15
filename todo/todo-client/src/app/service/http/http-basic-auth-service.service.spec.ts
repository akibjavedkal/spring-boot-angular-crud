import { TestBed } from '@angular/core/testing';

import { HttpBasicAuthServiceService } from './http-basic-auth-service.service';

describe('HttpBasicAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpBasicAuthServiceService = TestBed.get(HttpBasicAuthServiceService);
    expect(service).toBeTruthy();
  });
});
