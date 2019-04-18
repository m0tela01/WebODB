import { TestBed } from '@angular/core/testing';

import { ODBDataService } from './odbdata.service';

describe('ODBDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ODBDataService = TestBed.get(ODBDataService);
    expect(service).toBeTruthy();
  });
});
