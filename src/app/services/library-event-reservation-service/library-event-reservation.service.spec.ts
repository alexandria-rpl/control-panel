import { TestBed, inject } from '@angular/core/testing';

import { LibraryEventReservationService } from './library-event-reservation.service';

describe('ReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryEventReservationService]
    });
  });

  it('should be created', inject([LibraryEventReservationService], (service: LibraryEventReservationService) => {
    expect(service).toBeTruthy();
  }));
});
