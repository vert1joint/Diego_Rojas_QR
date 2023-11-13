import { TestBed } from '@angular/core/testing';

import { ApitallerService } from './apitaller.service';

describe('ApitallerService', () => {
  let service: ApitallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
