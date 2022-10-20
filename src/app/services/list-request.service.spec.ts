import { TestBed } from '@angular/core/testing';

import { ListRequestService } from './list-request.service';

describe('ListRequestService', () => {
  let service: ListRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
