import { TestBed } from '@angular/core/testing';

import { BookingapiService } from './bookingapi.service';

describe('BookingapiService', () => {
  let service: BookingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
