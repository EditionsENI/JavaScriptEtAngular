import { TestBed } from '@angular/core/testing';

import { C12Service } from './c12.service';

describe('C12Service', () => {
  let service: C12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
