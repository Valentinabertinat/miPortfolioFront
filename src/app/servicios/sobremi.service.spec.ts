import { TestBed } from '@angular/core/testing';

import { SobremiService } from './sobremi.service';

describe('SobremiService', () => {
  let service: SobremiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobremiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
